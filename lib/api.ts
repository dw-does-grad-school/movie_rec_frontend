const BASE_URL = 'https://movierecbackend-production.up.railway.app'


export async function fetchRecommendations(genre?: string, year?: number) {
  const params = new URLSearchParams()
  if (genre) params.append('genre', genre)
  if (year) params.append('year', year.toString())

  const res = await fetch(`${BASE_URL}/recommend?${params}`, {
    cache: 'no-store',
  })

  if (!res.ok) throw new Error('Failed to fetch recommendations')
  return res.json()
}

export async function fetchGenres() {
  const res = await fetch(`${BASE_URL}/genres`, {
    cache: 'no-store',
  })

  if (!res.ok) throw new Error('Failed to fetch genres')
  return res.json()
}

export async function searchMovies(query: string) {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
  const res = await fetch(`${BASE_URL}/search?query=${encodeURIComponent(query)}`, {
    cache: 'no-store',
  })

  if (!res.ok) throw new Error('Failed to search movies')
  return res.json()
}