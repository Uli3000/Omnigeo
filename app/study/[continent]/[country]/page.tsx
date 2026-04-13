import { getCountryByCode } from '@/lib/countries'
import { getLandmarkPhoto } from '@/lib/unsplash'
import { europeData } from '@/lib/data/europe-data'
import { asiaData } from '@/lib/data/asia-data'
import { africaData } from '@/lib/data/africa-data'
import { americasData } from '@/lib/data/americas-data'
import { oceaniaData } from '@/lib/data/oceania-data'
import { europeDataEn } from '@/lib/data/europe-data-en'
import { asiaDataEn } from '@/lib/data/asia-data-en'
import { americasDataEn } from '@/lib/data/americas-data-en'
import { oceaniaDataEn } from '@/lib/data/oceania-data-en'
import { africaDataEn } from '@/lib/data/africa-data-en'
import CountryPageClient from '@/components/country/CountryPageClient'

export default async function CountryPage({
  params,
}: {
  params: Promise<{ continent: string; country: string }>
}) {
  const { continent, country } = await params
  const code = country.toUpperCase()

  const data = await getCountryByCode(code)
  
  const extraEs = continent === 'europe' 
    ? europeData[code]
    : continent === 'asia' 
      ? asiaData[code]
      : continent === 'americas' 
        ? americasData[code]
        : continent === 'oceania' 
          ? oceaniaData[code]
          : africaData[code]

  const extraEn = continent === 'europe' 
    ? europeDataEn[code]
    : continent === 'asia' 
      ? asiaDataEn[code]
      : continent === 'americas' 
        ? americasDataEn[code]
        : continent === 'oceania' 
          ? oceaniaDataEn[code]
          : africaDataEn[code]

  const photos = extraEs
    ? await Promise.all(extraEs.landmarks.map((l) => getLandmarkPhoto(l.name)))
    : []

  return (
    <CountryPageClient
      data={data}
      continent={continent}
      photos={photos}
      extraEs={extraEs}
      extraEn={extraEn}
    />
  )
}