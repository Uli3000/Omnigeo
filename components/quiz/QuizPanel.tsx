'use client'

import { useState, useRef, useEffect } from 'react'
import { useQuizStore } from '@/store/quizStore'
import HintBox from './HintBox'
import AttemptDots from './AttemptDots'
import { QUIZ_CONFIG } from '@/lib/constants'
import { useLanguage } from '@/contexts/LanguageContext'

export default function QuizPanel() {
  const { t, language } = useLanguage()
  const [input, setInput] = useState('')
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const [revealToast, setRevealToast] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const {
    queue, currentIndex, countries, attempts,
    phase, capitalsMode, results,
    submitAnswer, skipCountry,
  } = useQuizStore()

  const currentCode = queue[currentIndex]
  const currentCountry = countries.find((c) => c.cca2 === currentCode)

  const correct = results.filter((r) => r.status === 'correct').length
  const failed = results.filter((r) => r.status === 'failed').length
  const skipped = results.filter((r) => r.status === 'skipped').length

  useEffect(() => {
    inputRef.current?.focus()
    setInput('')
    setFeedback(null)
  }, [currentIndex, phase])

  const handleSubmit = () => {
    if (!input.trim() || revealToast) return

    if (!currentCountry) return

    const target = phase === 'country' ? currentCountry.name : currentCountry.capital
    const targetEs = phase === 'country' ? currentCountry.nameEs : currentCountry.capital
    const normalize = (s: string) =>
      s.toLowerCase().trim()
       .normalize('NFD')
       .replace(/[\u0300-\u036f]/g, '')
    const isCorrect = normalize(input) === normalize(target) || (targetEs ? normalize(input) === normalize(targetEs) : false)
    const willFail = !isCorrect && attempts + 1 >= QUIZ_CONFIG.maxAttempts

    if (willFail) {
      setRevealToast(target)
      setInput('')
      setTimeout(() => {
        setRevealToast(null)
        submitAnswer(input)
      }, 2000)
      return
    }

    const result = submitAnswer(input)

    if (result === 'correct') {
      setFeedback('correct')
      setInput('')
      setTimeout(() => setFeedback(null), 600)
    } else if (result === 'wrong') {
      setFeedback('wrong')
      setTimeout(() => setFeedback(null), 600)
    }
  }

  const handleSkip = () => {
    if (revealToast || !currentCountry) return
    const target = phase === 'country' ? currentCountry.name : currentCountry.capital
    setRevealToast(target)
    setTimeout(() => {
      setRevealToast(null)
      skipCountry()
    }, 2000)
  }

  if (!currentCountry) return null

  const isCapitalPhase = capitalsMode && phase === 'capital'
  const prompt = isCapitalPhase
    ? `${t('quiz.prompt.capital')} ${language === 'es' && currentCountry.nameEs ? currentCountry.nameEs : currentCountry.name}?`
  : t('quiz.prompt.country')

  return (
    <div className="w-75 border-l border-white/10 flex flex-col bg-[#0a0a0f] relative">

      <div className="p-4 border-b border-white/10">
        <p className="text-xs text-white/40 mb-1">{prompt}</p>
      </div>

      <div className="p-4 flex flex-col gap-3 flex-1">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          placeholder={isCapitalPhase ? t('quiz.placeholder.capital') : t('quiz.placeholder.country')}
          disabled={!!revealToast}
          className={`w-full px-3 py-2 rounded-lg text-sm bg-white/5 border outline-none transition-colors ${
            feedback === 'correct'
              ? 'border-green-500 bg-green-500/10'
              : feedback === 'wrong'
              ? 'border-red-500 bg-red-500/10'
              : 'border-white/10 focus:border-white/30'
          }`}
        />

        <AttemptDots attempts={attempts} max={QUIZ_CONFIG.maxAttempts} />

        <HintBox
          country={currentCountry}
          hintsRevealed={attempts}
          phase={phase}
        />
      </div>

      <div className="grid grid-cols-3 gap-2 px-4 pb-3">
        {[
          { label: t('quiz.correct'), value: correct, color: 'text-green-400' },
          { label: t('quiz.failed'), value: failed, color: 'text-red-400' },
          { label: t('quiz.skipped'), value: skipped, color: 'text-white/40' },
        ].map((s) => (
          <div key={s.label} className="bg-white/5 rounded-lg p-2 text-center">
            <p className={`text-base font-medium ${s.color}`}>{s.value}</p>
            <p className="text-xs text-white/30">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-white/10 flex gap-2">
        <button
          onClick={handleSkip}
          disabled={!!revealToast}
          className="flex-1 py-2 text-sm text-white/40 border border-white/10 rounded-lg hover:bg-white/5 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {t('quiz.skip')}
        </button>
        <button
          onClick={handleSubmit}
          disabled={!!revealToast}
          className="flex-2 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {t('quiz.check')}
        </button>
      </div>

      {revealToast && (
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-black/60 rounded-lg">
          <div className="bg-[#1a1a2e] border border-red-500/30 rounded-lg p-6 mx-4 text-center">
            <p className="text-xs text-white/40 mb-1">{t('quiz.reveal')}</p>
            <p className="text-2xl font-semibold text-red-400">{revealToast}</p>
          </div>
        </div>
      )}
    </div>
  )
}