import { getCountryByCode } from '@/lib/countries'
import { getLandmarkPhoto } from '@/lib/unsplash'
import { europeData } from '@/lib/data/europe-data'
import CountryHero from '@/components/country/CountryHero'
import CountryStats from '@/components/country/CountryStats'
import CountryLandmarks from '@/components/country/CountryLandmark'
import CountryCuriosities from '@/components/country/CountryCuriosities'
import { asiaData } from '@/lib/data/asia-data'
import { africaData } from '@/lib/data/africa-data'
import { americasData } from '@/lib/data/americas-data'
import { oceaniaData } from '@/lib/data/oceania-data'

export default async function CountryPage({
  params,
}: {
  params: Promise<{ continent: string; country: string }>
}) {
  const { continent, country } = await params
  const code = country.toUpperCase()

  const data = await getCountryByCode(code)
  const extra = continent === 'europe' ? europeData[code] : continent === 'asia' ? asiaData[code] : continent === 'americas' ? americasData[code]: continent === 'oceania' ? oceaniaData[code] : africaData[code]

  const photos = extra
    ? await Promise.all(extra.landmarks.map((l) => getLandmarkPhoto(l.name)))
    : []

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <CountryHero country={data} continent={continent} photo={photos[0]} />
      <div className="max-w-4xl mx-auto px-8 pb-16">
        <CountryStats country={data} />
        {extra && (
          <>
            <CountryLandmarks 
              landmarks={extra.landmarks} 
              photos={photos.slice(0, extra.landmarks.length)} 
            />
            <CountryCuriosities curiosities={extra.curiosities} />
          </>
        )}
      </div>
    </div>
  )
}