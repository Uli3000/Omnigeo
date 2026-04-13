import { Country } from '@/types/country'
import { RESTCOUNTRIES_FIELDS } from './constants'

const BASE_URL = 'https://restcountries.com/v3.1'

function normalize(raw: any, region: string): Country {
  const languages = Object.values(raw.languages ?? {}) as string[]
  const currencies = Object.values(raw.currencies ?? {}).map(
    (c: any) => `${c.name} (${c.symbol})`
  )

  return {
    cca2:         raw.cca2,
    cca3:         raw.cca3,
    name:         raw.name.common,
    officialName: raw.name.official,
    capital:      raw.capital?.[0] ?? 'N/A',
    flag:         raw.flags?.svg ?? raw.flags?.png ?? '',
    coatOfArms:   raw.coatOfArms?.svg ?? raw.coatOfArms?.png,
    subregion:    raw.subregion ?? '',
    region,
    population:   raw.population,
    area:         raw.area,
    languages,
    currencies,
    latlng:       raw.latlng ?? [0, 0],
    nameEs: raw.translations?.spa?.common,
  }
}

export async function getCountriesByRegion(region: string): Promise<Country[]> {
  const res = await fetch(
    `${BASE_URL}/region/${region}?fields=${RESTCOUNTRIES_FIELDS}`,
    { next: { revalidate: 86400 } }
  )

  if (!res.ok) throw new Error(`Error fetching countries for region: ${region}`)

  const raw: any[] = await res.json()

  return raw
    .filter((c) => c.independent === true)
    .map((c) => normalize(c, region))
    .sort((a, b) => a.name.localeCompare(b.name))
}

export async function getCountryByCode(code: string): Promise<Country> {
  const res = await fetch(
    `${BASE_URL}/alpha/${code}?fields=${RESTCOUNTRIES_FIELDS}`,
    { next: { revalidate: 86400 } }
  )

  if (!res.ok) throw new Error(`Error fetching country: ${code}`)

  const raw = await res.json()
  return normalize(raw, raw.region?.toLowerCase() ?? '')
}