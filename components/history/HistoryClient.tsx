'use client'

import { useEffect, useState } from 'react'
import { useHistory } from '@/hooks/useHistory'
import { Session } from '@/types/country'
import SessionList from './SessionList'
import HeatmapCalendar from './HeatmapCalendar'
import AICoach from './AICoach'
import { useLanguage } from '@/contexts/LanguageContext'

export default function HistoryClient() {
  const { t } = useLanguage()
  const { getRecentSessions, getHeatmapData, getStats, clearHistory } = useHistory()
  const [sessions, setSessions] = useState<Session[]>([])
  const [heatmap, setHeatmap] = useState<{ date: string; count: number }[]>([])
  const [stats, setStats] = useState<ReturnType<typeof getStats>>(null)

  useEffect(() => {
    setSessions(getRecentSessions())
    setHeatmap(getHeatmapData())
    setStats(getStats())
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white p-8">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs text-white/40 uppercase tracking-widest mb-1">{t('history.progress')}</p>
            <h1 className="text-3xl font-semibold">{t('history.title')}</h1>
            <p className="text-white/40 text-sm mt-1">{t('history.subtitle')}</p>
          </div>
          {sessions.length > 0 && (
            <button
              onClick={() => { clearHistory(); setSessions([]); setHeatmap(getHeatmapData()); setStats(null) }}
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              {t('history.clear')}
            </button>
          )}
        </div>

        {sessions.length === 0 ? (
          <div className="text-center py-24 text-white/30">
            <p className="text-lg mb-2">{t('history.empty')}</p>
            <p className="text-sm">{t('history.empty.sub')}</p>
          </div>
        ) : (
          <>
            {stats && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                {[
                  { label: t('history.avg'), value: `${stats.avgScore}%` },
                  { label: t('history.sessions'), value: stats.totalSessions },
                  { label: t('history.corrects'), value: stats.totalCorrect },
                  { label: t('history.played'), value: stats.totalCountries },
                ].map((s) => (
                  <div key={s.label} className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-xs text-white/40 uppercase tracking-widest mb-1">{s.label}</p>
                    <p className="text-2xl font-semibold">{s.value}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 mb-8">
              <p className="text-xs text-white/40 uppercase tracking-widest mb-4">{t('history.recent')}</p>
              <SessionList sessions={sessions} />
            </div>

            <div className="flex gap-6 ">
              <div className=" bg-white/5 border border-white/10 rounded-lg p-5 shrink-0">
                <p className="text-xs text-white/40 uppercase tracking-widest mb-4">
                  {t('history.activity')} — {new Date().toLocaleDateString('es-MX', { month: 'long', year: 'numeric' })}
                </p>
                <HeatmapCalendar data={heatmap} />
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-5 flex-1">
                <p className="text-xs text-white/40 uppercase tracking-widest mb-4">{t('history.coach')}</p>
                <AICoach sessions={sessions} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}