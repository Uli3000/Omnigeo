'use client'

import { useEffect, useRef } from 'react'
import { useQuizStore } from '@/store/quizStore'
import { Country } from '@/types/country'
import QuizMap from './QuizMap'
import QuizPanel from './QuizPanel'
import QuizResults from './QuizResults'
import { useRouter } from 'next/navigation'
import { CONTINENTS } from '@/lib/constants'
import { useLanguage } from '@/contexts/LanguageContext'

interface Props {
  countries: Country[]
  continent: string
}

export default function QuizClient({ countries, continent }: Props) {
  const mapRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const { t } = useLanguage()
  const { status, startQuiz, resetQuiz, toggleCapitalsMode, capitalsMode } = useQuizStore()

  useEffect(() => {
    resetQuiz()
  }, [])

  const handleStartQuiz = () => {
    startQuiz(countries, continent)

    setTimeout(() => {
      mapRef.current?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start'
      })
    }, 100)
  }

  if (status === 'idle') {
    return (
      <div className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-xs text-white/40 uppercase tracking-widest mb-3">Quiz</p>
          <h1 className="text-4xl font-semibold mb-2 capitalize">{continent}</h1>
          <p className="text-white/40 text-sm mb-8">
            {countries.length} {t('quiz.countries')} · {t('quiz.prompt.country')}
          </p>

          <div className="flex gap-2 justify-center mb-6">
            {CONTINENTS.map((c) => (
              <button
                key={c.key}
                onClick={() => router.push(`/quiz/${c.key}`)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  c.key === continent
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/10 text-white/50 hover:bg-white/20'
                }`}
              >
                {t(`continent.${c.key}`)}
              </button>
            ))}
          </div>
          
          <div
            onClick={toggleCapitalsMode}
            className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-lg cursor-pointer hover:bg-white/10 transition-colors mb-6 max-w-xs mx-auto"
          >
            <div className="text-left">
              <p className="text-sm font-medium">{t('quiz.capitals')}</p>
              <p className="text-xs text-white/40 mt-0.5">{t('quiz.capitals.desc')}</p>
            </div>
            <div className={`w-8 h-4 rounded-full transition-colors relative ml-4 shrink-0 ${capitalsMode ? 'bg-blue-600' : 'bg-white/20'}`}>
              <div className={`w-3 h-3 rounded-full bg-white absolute top-0.5 transition-all ${capitalsMode ? 'right-0.5' : 'left-0.5'}`} />
            </div>
          </div>

          <button
            onClick={() => handleStartQuiz()} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors"
          >
            {t('quiz.start')}
          </button>
        </div>
      </div>
    )
  }

  if (status === 'finished') {
    return <QuizResults continent={continent} />
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex" ref={mapRef}>
      <QuizMap continent={continent} />
      <QuizPanel />
    </div>
  )
}