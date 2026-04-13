import { useLanguage } from '@/contexts/LanguageContext'
import { Session } from '@/types/country'

interface Props {
  sessions: Session[]
}

const CONTINENT_LABELS: Record<string, string> = {
  europe: 'Europa',
  asia: 'Asia',
  africa: 'África',
  americas: 'Américas',
  oceania: 'Oceanía',
}

export default function SessionList({ sessions }: Props) {
  const { t } = useLanguage()
  
  return (
    <div className="flex flex-col gap-2">
      {sessions.map((s) => {
        const pct = Math.round((s.score.correct / s.score.total) * 100)
        const minutes = Math.floor(s.timeSeconds / 60)
        const seconds = s.timeSeconds % 60
        const date = new Date(s.date).toLocaleDateString('es-MX', {
          day: 'numeric', month: 'short', year: 'numeric'
        })

        return (
          <div key={s.id} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
            <div className="flex items-center gap-4">
              <div className="text-xs text-white/30 w-24">{date}</div>
              <div>
                <p className="text-sm font-medium">{CONTINENT_LABELS[s.continent] ?? s.continent}</p>
                <p className="text-xs text-white/40">
                  {s.capitalsMode ? t('history.mode.capitals') : t('history.mode.countries')}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-xs text-white/30">Score</p>
                <div className="flex items-center gap-2 mt-1">
                  <p className='text-xs font-medium px-1'>{s.score.correct} / {s.score.total} </p>
                  <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium">{pct}%</span>
                </div>
              </div>
              <div className="text-right w-12">
                <p className="text-xs text-white/30">{t('history.time')}</p>
                <p className="text-xs font-medium mt-1">
                  {minutes}:{String(seconds).padStart(2, '0')}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}