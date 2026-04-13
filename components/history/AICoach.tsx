'use client'

import { useState } from 'react'
import { Session } from '@/types/country'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { useLanguage } from '@/contexts/LanguageContext'

interface Props {
  sessions: Session[]
}

export default function AICoach({ sessions }: Props) {
  const { t, language } = useLanguage()
  const [analysis, setAnalysis] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const analyze = async () => {
    setLoading(true)

    const summary = sessions.slice(0, 10).map((s) => ({
      continent: s.continent,
      score: Math.round((s.score.correct / s.score.total) * 100),
      capitalsMode: s.capitalsMode,
      failed: s.results
        .filter((r) => r.status === 'failed')
        .map((r) => r.countryName),
      skipped: s.results
        .filter((r) => r.status === 'skipped')
        .map((r) => r.countryName),
      failedCapitals: s.capitalsMode
        ? s.results
            .filter((r) => r.status === 'failed')
            .map((r) => `${r.capital} (${r.countryName})`)
        : [],
    }))

    const prompt = language === 'en' 
      ? `You are a friendly geography coach. Analyze these geography quiz results and give a brief analysis in English (maximum 4 sentences) identifying patterns in the mistakes. For example, if they fail more on small countries, islands, a certain subregion, countries with similar names, little-known capitals, etc. If there is capital failure data, analyze it too. Be specific with the countries and capitals mentioned and end with a concrete tip on what to study. Data: ${JSON.stringify(summary)}`
      : `Eres un coach de geografía amigable. Analiza estos resultados de quiz de geografía y da un análisis breve en español (máximo 4 oraciones) identificando patrones en los errores. Por ejemplo si falla más en países pequeños, islas, cierta subregión, países con nombres similares, capitales poco conocidas, etc. Si hay datos de capitales fallidas también analízalos. Sé específico con los países y capitales mencionados y termina con un consejo concreto de qué estudiar. Datos: ${JSON.stringify(summary)}`

    try {
      const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_KEY ?? '')
      const model = genAI.getGenerativeModel({ model: 'gemini-flash-latest' })
      const result = await model.generateContent(prompt)
      const text = result.response.text()
      setAnalysis(text ?? 'No se pudo generar el análisis.')
    } catch {
      setAnalysis('Error al conectar con el coach. Intenta de nuevo.')
    }
    setLoading(false)
  }

  return (
    <div className="flex flex-col h-full min-h-48">
      {!analysis && !loading && (
        <div className="flex-1 flex flex-col items-center justify-center gap-3 text-center">
          <p className="text-sm text-white/40 leading-relaxed">
            {t('coach.desc')}
          </p>
          <button
            onClick={analyze}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors"
          >
            {t('coach.analyze')}
          </button>
        </div>
      )}

      {loading && (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-sm text-white/40 animate-pulse">{t('coach.analyzing')}</p>
        </div>
      )}

      {analysis && (
        <div className="flex flex-col gap-4">
          <p className="text-sm text-white/70 leading-relaxed">{analysis}</p>
          <button
            onClick={() => setAnalysis(null)}
            className="text-xs text-white/30 hover:text-white/60 transition-colors text-left"
          >
            {t('coach.retry')}
          </button>
        </div>
      )}
    </div>
  )
}