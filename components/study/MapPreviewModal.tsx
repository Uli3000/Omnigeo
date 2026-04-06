'use client'

import { useEffect, useState } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

const GEO_URLS: Record<string, string> = {
  europe:   'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json',
  asia:     'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json',
  africa:   'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json',
  americas: 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json',
  oceania:  'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json',
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
  'Tuvalu': '',
  'Marshall Islands': 'Marshall Is.',
}

const CONTINENT_CONFIG: Record<string, { center: [number, number]; scale: number }> = {
  europe:   { center: [15, 54],   scale: 600 },
  asia:     { center: [90, 25],   scale: 400 },
  africa:   { center: [20, 3],    scale: 420 },
  americas: { center: [-80, 20],  scale: 200 },
  oceania:  { center: [135, -15], scale: 400 },
}

const AMERICAS_CONFIG: Record<string, { center: [number, number]; scale: number }> = {
  'Northern America':  { center: [-100, 50], scale: 200 },
  'Central America':   { center: [-85, 15],  scale: 600 },
  'South America':     { center: [-58, -25], scale: 380 },
  'Caribbean':         { center: [-70, 18],  scale: 900 },
}

interface Props {
  isOpen: boolean
  onClose: () => void
  countryCode: string
  countryName: string
  continent: string
  latlng: [number, number]
  area: number
  subregion: string
}

export default function MapPreviewModal({
  isOpen,
  onClose,
  countryCode,
  countryName,
  continent,
  latlng,
  area,
  subregion
}: Props) {

  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  useEffect(() => {
    setNotFound(false)
  }, [countryName])

  if (!isOpen) return null

  const normalizedName = NAME_FIXES[countryName] ?? countryName

  const isSmall = area < 30000
  const config = isSmall
    ? { center: [latlng[1], latlng[0]] as [number, number], scale: 1800 }
    : continent === 'americas'
      ? AMERICAS_CONFIG[subregion] ?? { center: [-80, 20], scale: 200 }
      : CONTINENT_CONFIG[continent] ?? { center: [0, 20], scale: 150 }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={onClose}
    >
      <div
        className="bg-[#12121a] border border-white/10 rounded-xl w-full max-w-2xl mx-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div>
            <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Ubicación</p>
            <p className="text-lg font-medium">{countryName}</p>
          </div>
          <button
            onClick={onClose}
            className="text-white/40 hover:text-white/80 transition-colors text-2xl leading-none"
          >
            ×
          </button>
        </div>

        <div className="p-4 bg-[#0d0d14]">
          {notFound && (
            <p className="text-center text-xs text-white/30 pb-2">
              País muy pequeño — se muestra la zona aproximada
            </p>
          )}
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              center: config.center,
              scale: config.scale,
            }}
            style={{ width: '100%', height: '380px' }}
          >
            <Geographies geography={GEO_URLS[continent]}>
              {({ geographies }) => {
                const hasTarget = geographies.some(
                  (g) => g.properties.name === normalizedName || g.id === countryCode
                )

                setTimeout(() => {
                  setNotFound(!hasTarget)
                }, 0)

                return geographies.map((geo) => {
                  const isTarget =
                    geo.properties.name === normalizedName || geo.id === countryCode

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      style={{
                        default: {
                          fill: isTarget ? '#378ADD' : '#1e1e2e',
                          stroke: '#ffffff15',
                          strokeWidth: 0.5,
                          outline: 'none',
                        },
                        hover: {
                          fill: isTarget ? '#378ADD' : '#1e1e2e',
                          stroke: '#ffffff15',
                          strokeWidth: 0.5,
                          outline: 'none',
                        },
                        pressed: { outline: 'none' },
                      }}
                    />
                  )
                })
              }}
            </Geographies>
          </ComposableMap>
        </div>

        <div className="px-6 py-3 border-t border-white/10">
          <p className="text-xs text-white/30 text-center">
            Presiona Escape o haz clic fuera para cerrar
          </p>
        </div>
      </div>
    </div>
  )
}