import { create } from 'zustand'
import { Country } from '@/types/country'
import { QuizResult } from '@/types/country'

type Phase = 'country' | 'capital'
type Status = 'idle' | 'playing' | 'finished'

interface QuizState {
  countries: Country[]
  queue: string[]
  currentIndex: number
  attempts: number
  hintsRevealed: number
  results: QuizResult[]
  capitalsMode: boolean
  phase: Phase
  status: Status
  startTime: number
  continent: string

  startQuiz: (countries: Country[], continent: string) => void
  submitAnswer: (answer: string) => 'correct' | 'wrong' | 'finished'
  skipCountry: () => void
  toggleCapitalsMode: () => void
  revealHint: () => void
  resetQuiz: () => void
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

export const useQuizStore = create<QuizState>((set, get) => ({
  countries: [],
  queue: [],
  currentIndex: 0,
  attempts: 0,
  hintsRevealed: 0,
  results: [],
  capitalsMode: false,
  phase: 'country',
  status: 'idle',
  startTime: 0,
  continent: '',

  startQuiz: (countries, continent) => {
    const queue = shuffle(countries.map((c) => c.cca2))
    set({
      countries,
      queue,
      currentIndex: 0,
      attempts: 0,
      hintsRevealed: 0,
      results: [],
      phase: 'country',
      status: 'playing',
      startTime: Date.now(),
      continent,
    })
  },

  submitAnswer: (answer) => {
    const { queue, currentIndex, countries, attempts, phase, capitalsMode, results } = get()
    const code = queue[currentIndex]
    const country = countries.find((c) => c.cca2 === code)
    if (!country) return 'wrong'

    const normalize = (s: string) =>
      s.toLowerCase().trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
    const target = phase === 'country' ? country.name : country.capital
    const isCorrect = normalize(answer) === normalize(target)

    if (isCorrect) {
      // si capitalsMode y terminó la fase país, pasa a capital
      if (phase === 'country' && capitalsMode) {
        set({ phase: 'capital', attempts: 0, hintsRevealed: 0 })
        return 'correct'
      }

      const newResult: QuizResult = {
        countryCode: code,
        countryName: country.name,
        capital: country.capital,
        status: 'correct',
        attemptsUsed: attempts + 1,
        timeSeconds: 0,
      }

      const newResults = [...results, newResult]
      const nextIndex = currentIndex + 1

      if (nextIndex >= queue.length) {
        set({ results: newResults, status: 'finished' })
        return 'finished'
      }

      set({
        results: newResults,
        currentIndex: nextIndex,
        attempts: 0,
        hintsRevealed: 0,
        phase: 'country',
      })
      return 'correct'
    }

    // respuesta incorrecta
    const newAttempts = attempts + 1
    set({ attempts: newAttempts, hintsRevealed: newAttempts })

    if (newAttempts >= 4) {
      const newResult: QuizResult = {
        countryCode: code,
        countryName: country.name,
        capital: country.capital,
        status: 'failed',
        attemptsUsed: 4,
        timeSeconds: 0,
      }
      const newResults = [...results, newResult]
      const nextIndex = currentIndex + 1

      if (nextIndex >= queue.length) {
        set({ results: newResults, status: 'finished' })
        return 'finished'
      }

      set({
        results: newResults,
        currentIndex: nextIndex,
        attempts: 0,
        hintsRevealed: 0,
        phase: 'country',
      })
      return 'finished'
    }

    return 'wrong'
  },

  skipCountry: () => {
    const { queue, currentIndex, countries, results } = get()
    const code = queue[currentIndex]
    const country = countries.find((c) => c.cca2 === code)
    if (!country) return

    const newResult: QuizResult = {
      countryCode: code,
      countryName: country.name,
      capital: country.capital,
      status: 'skipped',
      attemptsUsed: 0,
      timeSeconds: 0,
    }

    const newResults = [...results, newResult]
    const nextIndex = currentIndex + 1

    if (nextIndex >= queue.length) {
      set({ results: newResults, status: 'finished' })
      return
    }

    set({
      results: newResults,
      currentIndex: nextIndex,
      attempts: 0,
      hintsRevealed: 0,
      phase: 'country',
    })
  },

  revealHint: () => {
    set((state) => ({ hintsRevealed: state.hintsRevealed + 1 }))
  },

  toggleCapitalsMode: () => {
    set((state) => ({ capitalsMode: !state.capitalsMode }))
  },

  resetQuiz: () => {
    set({
      countries: [],
      queue: [],
      currentIndex: 0,
      attempts: 0,
      hintsRevealed: 0,
      results: [],
      phase: 'country',
      status: 'idle',
      startTime: 0,
      continent: '',
    })
  },
}))