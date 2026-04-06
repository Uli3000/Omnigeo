'use client'

import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { useQuizStore } from '@/store/quizStore'

const GEO_URLS: Record<string, string> = {
  europe:   'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json',
  asia:     'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json',
  africa:   'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json',
  americas: 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json',
  oceania:  'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json',
}

const CONTINENT_CONFIG: Record<string, { center: [number, number]; scale: number }> = {
  europe:   { center: [15, 52],   scale: 600 },
  asia:     { center: [90, 25],   scale: 350 },
  africa:   { center: [20, 3],    scale: 420 },
  americas: { center: [-80, 20],  scale: 200 },
  oceania:  { center: [135, -15], scale: 400 },
}

const SUBREGION_CONFIG: Record<string, { center: [number, number]; scale: number }> = {
  'Caribbean':          { center: [-70, 18],   scale: 1800 },
  'Central America':    { center: [-85, 15],   scale: 1000 },
  'South America':      { center: [-58, -20],  scale: 350 },
  'Northern America':   { center: [-100, 50],  scale: 250 },
  'Southern Europe':    { center: [15, 42],    scale: 900 },
  'Northern Europe':    { center: [15, 62],    scale: 700 },
  'Western Europe':     { center: [5, 50],     scale: 900 },
  'Eastern Europe':     { center: [30, 52],    scale: 700 },
  'Southeast Europe':   { center: [22, 42],    scale: 900 },
  'Melanesia':          { center: [155, -10],  scale: 1000 },
  'Micronesia':         { center: [155, 10],   scale: 1000 },
  'Polynesia':          { center: [-160, -15], scale: 800 },
  'Australia and New Zealand': { center: [140, -30], scale: 450 },
  'Southeast Asia':     { center: [110, 10],   scale: 500 },
  'Eastern Asia':       { center: [110, 35],   scale: 450 },
  'Southern Asia':      { center: [78, 22],    scale: 500 },
  'Western Asia':       { center: [42, 28],    scale: 500 },
  'Central Asia':       { center: [62, 45],    scale: 500 },
  'Northern Africa':    { center: [20, 25],    scale: 500 },
  'Western Africa':     { center: [-5, 12],    scale: 600 },
  'Eastern Africa':     { center: [38, 2],     scale: 550 },
  'Middle Africa':      { center: [22, 2],     scale: 600 },
  'Southern Africa':    { center: [25, -28],   scale: 700 },
}

const NAME_FIXES: Record<string, string> = {
  'Bosnia and Herzegovina': 'Bosnia and Herz.',
  'Dominican Republic': 'Dominican Rep.',
  'Antigua and Barbuda': 'Antigua and Barb.',
  'Saint Kitts and Nevis':'St. Kitts and Nevis',
  'Saint Vincent and the Grenadines':'St. Vin. and Gren.',
  'United States': 'United States of America',
  'North Macedonia': 'Macedonia',
  'Vatican City': 'Vatican',
  'Cape Verde': 'Cabo Verde',
  'Central African Republic': 'Central African Rep.',
  'Eswatini': 'eSwatini',
  'Equatorial Guinea': 'Eq. Guinea',
  'DR Congo': 'Dem. Rep. Congo',
  'Republic of the Congo': 'Congo',
  'Ivory Coast': 'Côte d\'Ivoire',
  'South Sudan': 'S. Sudan',
  'São Tomé and Príncipe': 'São Tomé and Principe',
  'Solomon Islands': 'Solomon Is.',
  'Marshall Islands': 'Marshall Is.',
}

interface Props {
  continent: string
}

export default function QuizMap({ continent }: Props) {
  const { queue, currentIndex, results, countries } = useQuizStore()

  const currentCode = queue[currentIndex]
  const currentCountry = countries.find((c) => c.cca2 === currentCode)
  const normalizedCurrent = NAME_FIXES[currentCountry?.name ?? ''] ?? currentCountry?.name

  const SMALL_COUNTRIES_THRESHOLD = 10000 // km²

  const subregion = currentCountry?.subregion ?? ''
  const isSmall = (currentCountry?.area ?? 0) < SMALL_COUNTRIES_THRESHOLD && continent !== 'oceania'

  const config = isSmall && currentCountry?.latlng
    ? {
        center: [currentCountry.latlng[1], currentCountry.latlng[0]] as [number, number],
        scale: 2500,
      }
    : SUBREGION_CONFIG[subregion] ?? CONTINENT_CONFIG[continent] ?? { center: [0, 20], scale: 150 }

  const getCountryColor = (geoName: string, geoId: string) => {
    const result = results.find((r) => {
      const country = countries.find((c) => c.cca2 === r.countryCode)
      const normalized = NAME_FIXES[country?.name ?? ''] ?? country?.name
      return normalized === geoName || country?.cca3 === geoId
    })

    if (result) {
      if (result.status === 'correct') return '#1D9E75'
      if (result.status === 'failed') return '#E24B4A'
      if (result.status === 'skipped') return '#888780'
    }

    if (geoName === normalizedCurrent || geoId === currentCountry?.cca3) {
      return '#378ADD'
    }

    return '#1e1e2e'
  }

  return (
    <div className="flex-1 bg-[#0d0d14] relative">
      <div className="absolute top-4 left-4 right-4 flex items-center gap-3 z-10">
        <span className="text-xs text-white/40 capitalize">{continent}</span>
        <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 rounded-full transition-all"
            style={{ width: `${(currentIndex / queue.length) * 100}%` }}
          />
        </div>
        <span className="text-xs text-white/40">{currentIndex} / {queue.length}</span>
      </div>

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ center: config.center, scale: config.scale }}
        style={{ width: '100%', height: '100vh' }}
      >
        <Geographies geography={GEO_URLS[continent]}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: getCountryColor(geo.properties.name, geo.id),
                    stroke: '#ffffff15',
                    strokeWidth: 0.5,
                    outline: 'none',
                  },
                  hover: {
                    fill: getCountryColor(geo.properties.name, geo.id),
                    stroke: '#ffffff15',
                    strokeWidth: 0.5,
                    outline: 'none',
                  },
                  pressed: { outline: 'none' },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>

      <div className="absolute bottom-4 left-4 flex gap-4">
        {[
          { color: '#378ADD', label: 'Actual' },
          { color: '#1D9E75', label: 'Correcto' },
          { color: '#E24B4A', label: 'Fallido' },
          { color: '#888780', label: 'Saltado' },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
            <span className="text-xs text-white/40">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}