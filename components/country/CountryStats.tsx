import { Country } from '@/types/country'

interface Props {
  country: Country
}

function StatCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
      <p className="text-lg mb-2">{icon}</p>
      <p className="text-xs text-white/40 uppercase tracking-widest mb-1">{label}</p>
      <p className="text-sm font-medium">{value}</p>
    </div>
  )
}

export default function CountryStats({ country }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
      <StatCard icon="👥" label="Población" value={country.population.toLocaleString('es-MX')} />
      <StatCard icon="🌐" label="Idioma principal" value={country.languages[0]} />
      <StatCard icon="💰" label="Moneda" value={country.currencies[0]} />
      <StatCard icon="📐" label="Área total" value={`${country.area.toLocaleString('es-MX')} km²`} />
    </div>
  )
}