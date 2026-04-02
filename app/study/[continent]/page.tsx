import { getCountriesByRegion } from '@/lib/countries'
import CountryTable from '@/components/study/CountryTable'

export default async function StudyPage({
  params,
}: {
  params: Promise<{ continent: string }>
}) {
  const { continent } = await params
  const countries = await getCountriesByRegion(continent)

  return <CountryTable countries={countries} continent={continent} />
}