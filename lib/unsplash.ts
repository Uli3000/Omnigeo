const ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY

export async function getLandmarkPhoto(landmarkName: string): Promise<string> {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(landmarkName)}&per_page=1&orientation=landscape`,
    {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
      next: { revalidate: 86400 },
    }
  )

  if (!res.ok) return ''
  const data = await res.json()
  return data.results[0]?.urls?.regular ?? ''
}