type MovieCardProps = {
    title: string
    release_year: number
    genre_list: string[]
    vote_average: number
    overview: string
  }
  
  export default function MovieCard({
    title, release_year, genre_list, vote_average, overview
  }: MovieCardProps) {
    return (
      <div className="border p-4 rounded-xl shadow-xl space-y-2">
        <h2 className="text-xl font-bold">{title} ({release_year})</h2>
        <p className="text-sm text-gray-400">{genre_list.join(', ')}</p>
        <p className="text-sm">⭐ {vote_average}</p>
        <p className="text-sm">{overview}</p>
      </div>
    )
  }
  