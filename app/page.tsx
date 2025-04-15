'use client'

import { useState, useEffect } from 'react'
import { fetchRecommendations } from '@/lib/api'
import MovieList from '@/components/MovieList'
import GenreSidebar from '@/components/GenreSidebar'
import { Movie } from '@/types/movie'

export default function HomePage() {
  const [genre, setGenre] = useState('')
  const [year, setYear] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [movies, setMovies] = useState<Movie[]>([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    fetchRecommendations(genre, year ? parseInt(year) : undefined)
      .then(setMovies)
      .catch(console.error)
  }, [genre, year])

  const handleSearch = () => {
    // Search functionality will be implemented here
    console.log('Searching for:', searchTerm)
  }

  return (
    <main className="flex min-h-screen bg-slate-100">
      {/* Mobile sidebar toggle button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-50 md:hidden bg-slate-700 text-white p-2 rounded-lg shadow-lg"
      >
        {isSidebarOpen ? '✕' : '☰'}
      </button>

      {/* Sidebar with mobile overlay */}
      <div className={`fixed inset-0 bg-black/50 z-40 md:hidden ${isSidebarOpen ? 'block' : 'hidden'}`} 
           onClick={() => setIsSidebarOpen(false)} />
      
      <GenreSidebar 
        selected={genre} 
        onSelect={setGenre} 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <section className="flex-1 p-4 md:p-8 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mt-16 md:mt-0">Movie Recommender</h1>

        <div className="flex flex-col gap-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              className="border border-slate-300 px-4 py-2 rounded-lg text-slate-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all"
              placeholder="Year (e.g., 2015)"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
            <div className="flex gap-2">
              <input
                className="border border-slate-300 px-4 py-2 rounded-lg text-slate-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all flex-1"
                placeholder="Search movie by title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                onClick={handleSearch}
                className="bg-slate-700 hover:bg-slate-800 px-4 md:px-6 py-2 rounded-lg text-white font-medium transition-colors whitespace-nowrap"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <MovieList movies={movies} />
      </section>
    </main>
  )
}
