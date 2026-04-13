import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { prompt } = await req.json()
  
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)
  const model = genAI.getGenerativeModel({ model: 'gemini-flash-latest' })
  const result = await model.generateContent(prompt)
  const text = result.response.text()
  
  return NextResponse.json({ analysis: text })
}