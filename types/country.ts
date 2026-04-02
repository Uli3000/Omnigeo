export interface Country {
  cca2: string
  cca3: string
  name: string
  officialName: string
  capital: string
  flag: string
  coatOfArms?: string
  subregion: string
  region: string
  population: number
  area: number
  languages: string[]
  currencies: string[]
  latlng: [number, number]
}

export interface QuizResult {
  countryCode: string
  countryName: string
  capital: string
  status: 'correct' | 'failed' | 'skipped'
  attemptsUsed: number
  timeSeconds: number
}

export interface Session {
  id: string
  date: string
  continent: string
  mode: 'name' | 'locate'
  capitalsMode: boolean
  score: {
    correct: number
    failed: number
    skipped: number
    total: number
  }
  timeSeconds: number
  results: QuizResult[]
}