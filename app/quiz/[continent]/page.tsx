import { getCountriesByRegion } from '@/lib/countries'
import QuizClient from '@/components/quiz/QuizClient'

export default async function QuizPage({
  params,
}: {
  params: Promise<{ continent: string }>
}) {
  const { continent } = await params
  const countries = await getCountriesByRegion(continent)

  return <QuizClient countries={countries} continent={continent} />
}