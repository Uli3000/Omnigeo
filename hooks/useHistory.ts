import { Session } from '@/types/country'

export function useHistory() {
  const getSessions = (): Session[] => {
    if (typeof window === 'undefined') return []
    return JSON.parse(localStorage.getItem('omnigeo-sessions') ?? '[]')
  }

  const clearHistory = () => {
    localStorage.removeItem('omnigeo-sessions')
  }

  const getHeatmapData = () => {
    const sessions = getSessions()
    const counts: Record<string, number> = {}

    sessions.forEach((s) => {
      const date = s.date.split('T')[0]
      counts[date] = (counts[date] ?? 0) + 1
    })

    // días del mes actual
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth()
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    const days = []
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i).toISOString().split('T')[0]
      days.push({ date, count: counts[date] ?? 0 })
    }

    return days
  }

  const getRecentSessions = (limit = 10): Session[] => {
    return getSessions().slice(0, limit)
  }

  const getStats = () => {
    const sessions = getSessions()
    if (sessions.length === 0) return null

    const totalCorrect = sessions.reduce((acc, s) => acc + s.score.correct, 0)
    const totalCountries = sessions.reduce((acc, s) => acc + s.score.total, 0)
    const avgScore = Math.round((totalCorrect / totalCountries) * 100)
    const totalSessions = sessions.length

    return { avgScore, totalSessions, totalCorrect, totalCountries }
  }

  return { getSessions, clearHistory, getHeatmapData, getRecentSessions, getStats }
}