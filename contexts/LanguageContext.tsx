'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  es: {
    'nav.home': 'Inicio',
    'nav.study': 'Estudio',
    'nav.quiz': 'Quiz',
    'nav.history': 'Historial',
    'study.title': 'Naciones',
    'study.search': 'Buscar país o capital...',
    'study.flag': 'Bandera',
    'study.country': 'País',
    'study.capital': 'Capital',
    'study.region': 'Región',
    'study.interactive': 'Interactivo',
    'study.showing': 'Mostrando',
    'study.of': 'de',
    'study.countries': 'países',
    'study.filtered': 'filtrado de',
    'quiz.start': 'Comenzar Quiz',
    'quiz.countries': 'países',
    'quiz.prompt.country': '¿Qué país es este?',
    'quiz.prompt.capital': '¿Cuál es la capital de',
    'quiz.placeholder.country': 'Nombre del país...',
    'quiz.placeholder.capital': 'Nombre de la capital...',
    'quiz.check': 'Comprobar',
    'quiz.skip': 'Saltar',
    'quiz.correct': 'correctos',
    'quiz.failed': 'fallidos',
    'quiz.skipped': 'saltados',
    'quiz.hints.title': 'Pistas',
    'quiz.hints.letters': 'letras',
    'quiz.hints.starts': 'Empieza por',
    'quiz.capitals': 'Modo capitales',
    'quiz.capitals.desc': 'También te pregunta la capital de cada país',
    'quiz.attempts': 'intento',
    'quiz.attempts.plural': 'intentos',
    'quiz.attempts.left': 'restante',
    'quiz.attempts.left.plural': 'restantes',
    'quiz.reveal': 'Era...',
    'quiz.map.current': 'Actual',
    'quiz.map.correct': 'Correcto',
    'quiz.map.failed': 'Fallido',
    'quiz.map.skipped': 'Saltado',
    'results.title': 'Resultados',
    'results.correct': 'Correctos',
    'results.failed': 'Fallidos',
    'results.skipped': 'Saltados',
    'results.firsttry': 'A la primera',
    'results.failed.list': 'Países fallidos',
    'results.replay': 'Jugar de nuevo',
    'results.study': 'Volver a estudiar',
    'results.time': 'Tiempo total',
    'history.title': 'Study History',
    'history.subtitle': 'Tu progreso a través del globo',
    'history.progress': 'Progreso',
    'history.clear': 'Limpiar historial',
    'history.empty': 'Sin sesiones aún',
    'history.empty.sub': 'Completa un quiz para ver tu historial aquí',
    'history.avg': 'Promedio',
    'history.sessions': 'Sesiones',
    'history.corrects': 'Correctos',
    'history.played': 'Países jugados',
    'history.activity': 'Actividad',
    'history.coach': 'AI Coach',
    'history.recent': 'Sesiones recientes',
    'coach.desc': 'Analiza tus sesiones para descubrir patrones en tus errores',
    'coach.analyze': 'Analizar mi progreso',
    'coach.analyzing': 'Analizando tus sesiones...',
    'coach.retry': 'Volver a analizar',
    'country.location': 'Ubicación',
    'country.close': 'Presiona Escape o haz clic fuera para cerrar',
    'country.population': 'Población',
    'country.language': 'Idioma principal',
    'country.currency': 'Moneda',
    'country.area': 'Área total',
    'country.landmarks': 'Cultural Landmarks',
    'country.places': 'lugares',
    'country.curiosities': 'Curiosidades',
    'country.back': 'Volver a',
    'country.shield': 'Escudo',
    'history.time': 'Tiempo',
    'history.mode.countries': 'Solo Países',
    'history.mode.capitals': 'Países + Capitales',
    'home.explore': 'Explora las',
    'home.depths': 'Profundidades de la Tierra.',
    'home.total': 'Países Totales',
    'home.study': 'Modo Estudio',
    'home.quiz': 'Modo Quiz',
    'continent.europe': 'Europa',
    'continent.africa': 'África',
    'continent.asia': 'Asia',
    'continent.americas': 'Américas',
    'continent.oceania': 'Oceanía',
    'continent.europe.desc': '44 países • Alta densidad de aprendizaje',
    'continent.africa.desc': '54 estados soberanos',
    'continent.asia.desc': 'El continente más grande',
    'continent.americas.desc': 'Hemisferio occidental',
    'continent.oceania.desc': 'Islas del Pacífico',
  },
  en: {
    'nav.home': 'Home',
    'nav.study': 'Study',
    'nav.quiz': 'Quiz',
    'nav.history': 'History',
    'study.title': 'Nations',
    'study.search': 'Search country or capital...',
    'study.flag': 'Flag',
    'study.country': 'Country',
    'study.capital': 'Capital',
    'study.region': 'Region',
    'study.interactive': 'Interactive',
    'study.showing': 'Showing',
    'study.of': 'of',
    'study.countries': 'countries',
    'study.filtered': 'filtered from',
    'quiz.start': 'Start Quiz',
    'quiz.countries': 'countries',
    'quiz.prompt.country': 'What country is this?',
    'quiz.prompt.capital': 'What is the capital of',
    'quiz.placeholder.country': 'Country name...',
    'quiz.placeholder.capital': 'Capital name...',
    'quiz.check': 'Check',
    'quiz.skip': 'Skip',
    'quiz.correct': 'correct',
    'quiz.failed': 'failed',
    'quiz.skipped': 'skipped',
    'quiz.hints.title': 'Hints',
    'quiz.hints.letters': 'letters',
    'quiz.hints.starts': 'Starts with',
    'quiz.capitals': 'Capitals mode',
    'quiz.capitals.desc': 'Also asks you the capital of each country',
    'quiz.attempts': 'attempt',
    'quiz.attempts.plural': 'attempts',
    'quiz.attempts.left': 'left',
    'quiz.attempts.left.plural': 'left',
    'quiz.reveal': 'It was...',
    'quiz.map.current': 'Current',
    'quiz.map.correct': 'Correct',
    'quiz.map.failed': 'Failed',
    'quiz.map.skipped': 'Skipped',
    'results.title': 'Results',
    'results.correct': 'Correct',
    'results.failed': 'Failed',
    'results.skipped': 'Skipped',
    'results.firsttry': 'First try',
    'results.failed.list': 'Failed countries',
    'results.replay': 'Play again',
    'results.study': 'Back to study',
    'results.time': 'Total time',
    'history.title': 'Study History',
    'history.subtitle': 'Your progress across the globe',
    'history.progress': 'Progress',
    'history.clear': 'Clear history',
    'history.empty': 'No sessions yet',
    'history.empty.sub': 'Complete a quiz to see your history here',
    'history.avg': 'Average',
    'history.sessions': 'Sessions',
    'history.corrects': 'Correct',
    'history.played': 'Countries played',
    'history.activity': 'Activity',
    'history.coach': 'AI Coach',
    'history.recent': 'Recent sessions',
    'coach.desc': 'Analyze your sessions to discover patterns in your mistakes',
    'coach.analyze': 'Analyze my progress',
    'coach.analyzing': 'Analyzing your sessions...',
    'coach.retry': 'Analyze again',
    'country.location': 'Location',
    'country.close': 'Press Escape or click outside to close',
    'country.population': 'Population',
    'country.language': 'Main language',
    'country.currency': 'Currency',
    'country.area': 'Total area',
    'country.landmarks': 'Cultural Landmarks',
    'country.places': 'places',
    'country.curiosities': 'Curiosities',
    'country.back': 'Back to',
    'country.shield': 'Coat of Arms',
    'history.time': 'Time',
    'history.mode.countries': 'Countries only',
    'history.mode.capitals': 'Countries + Capitals',
    'home.explore': 'Explore the',
    'home.depths': 'Depths of the Earth.',
    'home.total': 'Total Countries',
    'home.study': 'Study Mode',
    'home.quiz': 'Quiz Mode',
    'continent.europe': 'Europe',
    'continent.africa': 'Africa',
    'continent.asia': 'Asia',
    'continent.americas': 'Americas',
    'continent.oceania': 'Oceania',
    'continent.europe.desc': '44 countries • High learning density',
    'continent.africa.desc': '54 sovereign states',
    'continent.asia.desc': 'The largest continent',
    'continent.americas.desc': 'Western hemisphere',
    'continent.oceania.desc': 'Pacific islands',
  },
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'es',
  setLanguage: () => {},
  t: (key) => key,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es')

  useEffect(() => {
    const saved = localStorage.getItem('omnigeo-lang') as Language
    if (saved) {
      setLanguageState(saved)
    } else {
      const browser = navigator.language.startsWith('es') ? 'es' : 'en'
      setLanguageState(browser)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('omnigeo-lang', lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] ?? key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)