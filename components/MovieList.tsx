import MovieCard from './MovieCard'

export default function MovieList({ movies }: { movies: any[] }) {
  if (!movies.length) return <p>No movies found.</p>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.title} {...movie} />
      ))}
    </div>
  )
}
