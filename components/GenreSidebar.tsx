'use client'
import { useEffect, useState } from 'react'

type Props = {
  selected: string
  onSelect: (genre: string) => void
}

export default function GenreSidebar({ selected, onSelect }: Props) {
  const [genres, setGenres] = useState<string[]>([])
  console.log('API BASE URL:', process.env.NEXT_PUBLIC_API_BASE_URL)

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/genres`)
      .then((res) => res.json())
      .then(setGenres)
      .catch(console.error)
  }, [])

  return (
    <aside className="w-48 p-4 border-r border-gray-700">
      <h2 className="text-lg font-semibold mb-2">Genres</h2>
      <ul className="space-y-1">
        {genres.map((genre) => (
          <li key={genre}>
            <button
              className={`w-full text-left px-2 py-1 rounded ${
                genre === selected
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-700'
              }`}
              onClick={() => onSelect(genre)}
            >
              {genre}
            </button>
            <p>Genres: {JSON.stringify(genres)}</p>

          </li>
        ))}
      </ul>
    </aside>
  )
}
