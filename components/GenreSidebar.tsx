'use client'

import { useEffect, useState } from 'react'

type Props = {
  selected: string
  onSelect: (genre: string) => void
}

export default function GenreSidebar({ selected, onSelect }: Props) {
  const [genres, setGenres] = useState<string[]>([])

  useEffect(() => {
    fetch('http://localhost:8000/genres')
      .then(res => res.json())
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
                  ? 'bg-sky-500 text-white'
                  : 'hover:bg-gray-700 hover:text-white'
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
