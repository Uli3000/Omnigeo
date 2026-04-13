import { useLanguage } from "@/contexts/LanguageContext"

interface Props {
  attempts: number
  max: number
}

export default function AttemptDots({ attempts, max }: Props) {
  const { t } = useLanguage()
  const left = max - attempts
  const attemptWord = left === 1 ? t('quiz.attempts') : t('quiz.attempts.plural')
  const leftWord = left === 1 ? t('quiz.attempts.left') : t('quiz.attempts.left.plural')

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1.5">
        {Array.from({ length: max }).map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i < attempts ? 'bg-red-500' : 'bg-white/15'
            }`}
          />
        ))}
      </div>
      <span className="text-xs text-white/30">
        {left} {attemptWord} {leftWord}
      </span>
    </div>
  )
}