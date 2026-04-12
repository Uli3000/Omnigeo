interface Props {
  data: { date: string; count: number }[]
}

const getColor = (count: number) => {
  if (count === 0) return 'bg-white/5'
  if (count === 1) return 'bg-blue-900'
  if (count === 2) return 'bg-blue-700'
  return 'bg-blue-500'
}

export default function HeatmapCalendar({ data }: Props) {
  const weeks: { date: string; count: number }[][] = []
  let currentWeek: { date: string; count: number }[] = []

  // rellenar días vacíos al inicio para alinear con el día de la semana
  const firstDay = new Date(data[0]?.date)
  const startPadding = firstDay.getDay()
  for (let i = 0; i < startPadding; i++) {
    currentWeek.push({ date: '', count: -1 })
  }

  data.forEach((day) => {
    currentWeek.push(day)
    if (currentWeek.length === 7) {
      weeks.push(currentWeek)
      currentWeek = []
    }
  })

  if (currentWeek.length > 0) weeks.push(currentWeek)

  const dayLabels = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']

  return (
    <div>
      <div className="flex gap-1 mb-1 ml-0">
        {dayLabels.map((d) => (
          <div key={d} className="w-7 text-xs text-white/20 text-center">{d}</div>
        ))}
      </div>

      <div className="flex flex-col gap-1">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex gap-1">
            {week.map((day, di) => (
              <div
                key={di}
                title={day.date ? `${day.date}: ${day.count} sesión(es)` : ''}
                className={`w-7 h-7 rounded-sm transition-colors ${
                  day.count === -1 ? 'bg-transparent' : getColor(day.count)
                }`}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-3">
        <span className="text-xs text-white/30">Menos</span>
        {['bg-white/5', 'bg-blue-900', 'bg-blue-700', 'bg-blue-500'].map((c) => (
          <div key={c} className={`w-4 h-4 rounded-sm ${c}`} />
        ))}
        <span className="text-xs text-white/30">Más</span>
      </div>
    </div>
  )
}