import React from 'react'

const MovieList = ({movies}) => {
  return (
    <>
    <ul className='flex flex-wrap space-x-3 ml-4'>
    {movies.map((movie) =>(
      <li key={movie.imdbID} className=''>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <div className="">
            <img
              className="rounded-t-lg"
              src={movie.Poster}
              alt={movie.Title} />
          </div>
          <div className="p-5">
            <h3>Movie : {movie.Title}</h3>
            <h3>Movie : {movie.Year}</h3>
          </div>
        </div>
      </li>
      ))}
      </ul>
      </>
  )
}

export default MovieList