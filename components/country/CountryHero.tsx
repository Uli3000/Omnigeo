import Link from 'next/link'
import { Country } from '@/types/country'

interface Props {
  country: Country
  continent: string
  photo?: string
}

export default function CountryHero({ country, continent, photo }: Props) {
  const continentWord = continent.charAt(0).toUpperCase().concat(continent.slice(1,continent.length))

  return (
    <div className="relative w-full">
      <div className="max-w-4xl mx-auto px-8 pt-8">
        <Link
          href={`/study/${continent}`}
          className="text-xs text-white/40 hover:text-white/70 transition-colors inline-flex items-center gap-2 mb-8"
        >
          ← Volver a {continentWord}
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-8 grid grid-cols-2 gap-8 items-start mb-10">
        <div>
          <p className="text-xs text-white/40 uppercase tracking-widest mb-3">{country.subregion}</p>
          <h1 className="text-6xl font-bold mb-4">{country.name.toUpperCase()}</h1>
          <div className="flex gap-6">
            <div>
              <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Capital</p>
              <p className="text-sm font-medium">{country.capital}</p>
            </div>
            <div>
              <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Región</p>
              <p className="text-sm font-medium">{country.subregion}</p>
            </div>
          </div>
        </div>

        <div className="relative">
          {photo && (
            <img
              src={photo}
              alt={country.name}
              className="w-full h-48 object-cover rounded-lg"
            />
          )}
          <img
            src={country.flag}
            alt={`Bandera de ${country.name}`}
            className="absolute top-3 right-3 w-10 h-7 object-cover rounded shadow-lg border border-white/10"
          />
        </div>
      </div>
    </div>
  )
}