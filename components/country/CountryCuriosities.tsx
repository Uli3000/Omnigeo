"use client"
import { useLanguage } from "@/contexts/LanguageContext"

interface Curiosity {
  title: string
  description: string
}

interface Props {
  curiosities: Curiosity[]
}

export default function CountryCuriosities({ curiosities }: Props) {
  const { t } = useLanguage()
  return (
    <div>
      <h2 className="text-lg font-medium mb-4">{t('country.curiosities')}</h2>
      <div className="space-y-3">
        {curiosities.map((c, i) => (
          <div key={i} className="flex gap-4 bg-white/5 border border-white/10 rounded-lg p-4">
            <span className="text-xs text-white/30 font-mono mt-0.5 shrink-0">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <p className="text-sm font-medium mb-1">{c.title}</p>
              <p className="text-xs text-white/50 leading-relaxed">{c.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}