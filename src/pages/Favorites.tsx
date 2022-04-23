import React, { useRef,useCallback, useState, useEffect } from 'react';
import { Movie } from '../models/Movie';

function Movies() {
  const[favorites,setMoviesList] = useState<Movie[]>([]);

  const removeFromFavorite = (e: React.MouseEvent<HTMLButtonElement>,movie:Movie)=>
  {
    var localstoragemovies = JSON.parse(localStorage.getItem("FavoriteMovies")||'[]');
    setMoviesList(localstoragemovies);
    var i = 0;
    localstoragemovies.forEach((Movie: any) => {
      if(Movie.imdbID == movie.imdbID)
      {
        localstoragemovies.splice(i,1);
      }
      i++;
    });
    localStorage.setItem("FavoriteMovies", JSON.stringify(localstoragemovies));
  };
  useEffect(()=>{
    var localstoragemovies = JSON.parse(localStorage.getItem("FavoriteMovies")||'[]');
    setMoviesList(localstoragemovies);
  }, [])
  return (
    <div className="" >
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
        <h2 className="text-2xl font-extrabold tracking-tight text-white">Favorite Movies</h2>
        <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8 " >
          {favorites.map((movie) => (
            <div key={movie.imdbID} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={'/movie/'+movie.imdbID} >
                      <span  aria-hidden="true" className="absolute inset-0" />
                      {movie.Title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{movie.Year}</p>
                </div>
                <div className="mt-1 z-50">
                  <button onClick={(e)=>removeFromFavorite(e,movie)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star-off" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffec00" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="3" y1="3" x2="21" y2="21" />
                    <path d="M10.012 6.016l1.981 -4.014l3.086 6.253l6.9 1l-4.421 4.304m.012 4.01l.588 3.426l-6.158 -3.245l-6.172 3.245l1.179 -6.873l-5 -4.867l6.327 -.917" />
                  </svg>
                  </button>
                </div>
              </div>
                
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Movies