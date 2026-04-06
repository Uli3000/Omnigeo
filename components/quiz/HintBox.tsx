import { Country } from '@/types/country'

interface Props {
  country: Country
  hintsRevealed: number
  phase: 'country' | 'capital'
}

export default function HintBox({ country, hintsRevealed, phase }: Props) {
  const target = phase === 'country' ? country.name : country.capital

  const hints = phase === 'country'
    ? [
        `Tiene ${target.replace(/ /g, '').length} letras`,
        `Empieza por "${target[0].toUpperCase()}"`,
        `Subregión: ${country.subregion}`,
      ]
    : [
        `Tiene ${target.replace(/ /g, '').length} letras`,
        `Empieza por "${target[0].toUpperCase()}"`,
        `Idioma oficial: ${country.languages[0]}`,
      ]

  if (hintsRevealed === 0) return null

  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-3">
      <p className="text-xs text-white/30 mb-2 uppercase tracking-widest">Pistas</p>
      <div className="flex flex-col gap-1.5">
        {hints.slice(0, hintsRevealed).map((hint, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0" />
            <p className="text-xs text-white/60">{hint}</p>
          </div>
        ))}
      </div>
    </div>
  )
}