'use client'
import { useRouter } from 'next/navigation'
import { CONTINENTS } from '@/lib/constants'
import Link from 'next/link'
import { useQuizStore } from '@/store/quizStore'

interface Props {
  continent: string
}

export default function QuizResults({ continent }: Props) {
  const router = useRouter()
  const { results, startTime, countries, startQuiz, resetQuiz } = useQuizStore()

  const correct = results.filter((r) => r.status === 'correct').length
  const failed = results.filter((r) => r.status === 'failed').length
  const skipped = results.filter((r) => r.status === 'skipped').length
  const total = results.length
  const percentage = Math.round((correct / total) * 100)
  const timeSeconds = Math.round((Date.now() - startTime) / 1000)
  const minutes = Math.floor(timeSeconds / 60)
  const seconds = timeSeconds % 60

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center p-8">
      <div className="max-w-lg w-full">
        <p className="text-xs text-white/40 uppercase tracking-widest mb-2 text-center">Resultados</p>
        <h1 className="text-6xl font-bold text-center mb-1">{percentage}%</h1>
        <p className="text-white/40 text-sm text-center mb-8">Países correctos</p>

        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { label: 'Correctos', value: correct, color: 'text-green-400' },
            { label: 'Fallidos', value: failed, color: 'text-red-400' },
            { label: 'Saltados', value: skipped, color: 'text-white/40' },
          ].map((s) => (
            <div key={s.label} className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
              <p className={`text-2xl font-semibold ${s.color}`}>{s.value}</p>
              <p className="text-xs text-white/30 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-white/40 mb-8">
          Tiempo total: {minutes}:{String(seconds).padStart(2, '0')}
        </p>

        {failed > 0 && (
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-8">
            <p className="text-xs text-white/40 uppercase tracking-widest mb-3">Países fallidos</p>
            <div className="flex flex-wrap gap-2">
              {results
                .filter((r) => r.status === 'failed' || r.status === 'skipped')
                .map((r) => {
                  const country = countries.find((c) => c.cca2 === r.countryCode)
                  return (
                    <div key={r.countryCode} className="flex items-center gap-1.5 bg-white/5 rounded px-2 py-1">
                      <img src={country?.flag} className="w-4 h-3 object-cover rounded-sm" />
                      <span className="text-xs text-white/60">{r.countryName}</span>
                    </div>
                  )
                })}
            </div>
          </div>
        )}

        <div className="flex gap-2 justify-center mb-6">
          {CONTINENTS.map((c) => (
            <button
              key={c.key}
              onClick={() => { resetQuiz(); router.push(`/quiz/${c.key}`) }}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                c.key === continent
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/10 text-white/50 hover:bg-white/20'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => startQuiz(countries, continent)}
            className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors"
          >
            Jugar de nuevo
          </button>
          <Link
            href={`/study/${continent}`}
            onClick={resetQuiz}
            className="flex-1 py-3 border border-white/10 hover:bg-white/5 rounded-lg text-sm text-center transition-colors"
          >
            Volver a estudiar
          </Link>
        </div>
      </div>
    </div>
  )
}