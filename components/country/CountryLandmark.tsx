"use client"
import { useLanguage } from "@/contexts/LanguageContext"

interface Landmark {
  name: string
  description: string
}

interface Props {
  landmarks: Landmark[]
  photos: (string | null)[]
}

export default function CountryLandmarks({ landmarks, photos }: Props) {
  const { t } = useLanguage()
  const validItems = landmarks
    .map((landmark, i) => ({ landmark, photo: photos[i] }))
    .filter((item) => item.photo)

  if (validItems.length === 0) return null

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium">{t('country.landmarks')}</h2>
      </div>

      <div className="flex flex-col gap-3">
        <div className="relative rounded-lg overflow-hidden h-56">
          <img src={validItems[0].photo!} alt={validItems[0].landmark.name} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-black/80 to-transparent">
            <p className="text-sm font-medium text-white">{validItems[0].landmark.name}</p>
          </div>
        </div>

        {validItems.length > 1 && (
          <div className={`grid gap-3 ${validItems.length === 2 ? 'grid-cols-1' : 'grid-cols-2'}`}>
            {validItems.slice(1).map((item, i) => (
              <div key={i} className="relative rounded-lg overflow-hidden h-40">
                <img src={item.photo!} alt={item.landmark.name} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-linear-to-t from-black/80 to-transparent">
                  <p className="text-xs font-medium text-white">{item.landmark.name}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}