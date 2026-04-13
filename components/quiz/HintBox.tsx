import { useLanguage } from '@/contexts/LanguageContext'
import { Country } from '@/types/country'
import { useMemo } from 'react'

interface Props {
  country: Country
  hintsRevealed: number
  phase: 'country' | 'capital'
}

const getLetterHint = (str: string) => {
  const chars = str.split('')
  const letterIndices = chars
    .map((c, i) => ({ c, i }))
    .filter(({ c }) => c !== ' ')
    .map(({ i }) => i)

  const revealCount = letterIndices.length <= 4
  ? Math.max(1, Math.floor(letterIndices.length * 0.5))
  : Math.max(1, Math.floor(letterIndices.length * 0.45))
  
  const firstLetters = new Set<number>()
  let newWord = true
  chars.forEach((c, i) => {
    if (newWord && c !== ' ') {
      firstLetters.add(i)
      newWord = false
    }
    if (c === ' ') newWord = true
  })

  // revela primeras letras + aleatorias
  const revealed = new Set(firstLetters)
  const remaining = letterIndices.filter((i) => !revealed.has(i))
  const shuffled = [...remaining].sort(() => Math.random() - 0.5)
  shuffled.slice(0, Math.max(0, revealCount - revealed.size)).forEach((i) => revealed.add(i))

  return chars
    .map((c, i) => {
      if (c === ' ') return ' '
      return revealed.has(i) ? c : '_'
    })
    .join(' ')
    .replace(/  /g, '   ')
}

export default function HintBox({ country, hintsRevealed, phase }: Props) {
  const target = phase === 'country' ? country.name : country.capital
  const letterHint = useMemo(() => getLetterHint(target), [target])
  const { t } = useLanguage()

  const hints = [
    `${t('quiz.hints.starts')} "${target.replace(/ /g, '').length}" ${t('quiz.hints.letters')}`,
    `${t('quiz.hints.starts')} "${target[0].toUpperCase()}"`,
    letterHint,
  ]

  if (hintsRevealed === 0) return null

  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-3">
      <p className="text-xs text-white/30 mb-2 uppercase tracking-widest">{t('quiz.hints.title')}</p>
      <div className="flex flex-col gap-1.5">
        {hints.slice(0, hintsRevealed).map((hint, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0" />
            <p className={`text-xs ${i === 2 && phase === 'country' ? 'font-mono tracking-widest text-white/80' : 'text-white/60'}`}>{hint}</p>
          </div>
        ))}
      </div>
    </div>
  )
}