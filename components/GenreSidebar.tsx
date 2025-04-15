'use client'
import { useEffect, useState } from 'react'

type Props = {
  selected: string
  onSelect: (genre: string) => void
}

export default function GenreSidebar({ selected, onSelect }: Props) {
  const [genres, setGenres] = useState<string[]>([])

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/genres`)
      .then((res) => res.json())
      .then(setGenres)
      .catch(console.error)
  }, [])

  return (
    <aside className="w-64 p-6 bg-white border-r border-slate-200 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-800 mb-4">Genres</h2>
      <ul className="space-y-2">
        {genres.map((genre) => (
          <li key={genre}>
            <button
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                genre === selected
                  ? 'bg-slate-700 text-white'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
              onClick={() => onSelect(genre)}
            >
              {genre}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}
