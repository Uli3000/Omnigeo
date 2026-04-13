'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import CountryHero from '@/components/country/CountryHero'
import CountryStats from '@/components/country/CountryStats'
import CountryLandmarks from '@/components/country/CountryLandmark'
import CountryCuriosities from '@/components/country/CountryCuriosities'

export default function CountryPageClient({
  data,
  continent,
  photos,
  extraEs,
  extraEn,
}: any) {
  const { language } = useLanguage()
  const extra = language === 'en' ? extraEn : extraEs

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