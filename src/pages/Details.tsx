import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios';
import { Movie } from '../models/Movie';
var favorite = false;
var run = true;
const Details = () => {
  var id = window.location.href.split("movie/")[1];
  const[movie,setMovie] = useState<Movie>();
  const[favorites,setMoviesList] = useState<Movie[]>([]);
  const addToFavorite = (e: React.MouseEvent<HTMLButtonElement>)=>
  {
    
    var localstoragemovies = JSON.parse(localStorage.getItem("FavoriteMovies")||'[]');
    var i = 0;
    localstoragemovies.forEach((Movie: any) => {
      if(Movie.imdbID == movie?.imdbID)
      {
        localstoragemovies.splice(i,1);
      }
      i++;
    });
    localstoragemovies.push(movie);
    localStorage.setItem("FavoriteMovies", JSON.stringify(localstoragemovies));
  };
  
  const removeFromFavorite = (e: React.MouseEvent<HTMLButtonElement>)=>
  {
    var localstoragemovies = JSON.parse(localStorage.getItem("FavoriteMovies")||'[]');
    setMoviesList(localstoragemovies);
    var i = 0;
    localstoragemovies.forEach((Movie: any) => {
      if(Movie.imdbID == movie?.imdbID)
      {
        localstoragemovies.splice(i,1);
      }
      i++;
    });
    localStorage.setItem("FavoriteMovies", JSON.stringify(localstoragemovies));
  };
  useEffect(()=>{
    axios.get<Movie>("http://omdbapi.com/?apikey=3118c827&s=&i="+id).then((response:AxiosResponse)=>
    {
      if(response.data.Response == "True")
        {
          setMovie(response.data);
        ;}
    })

  }, [])
  if(movie?.imdbID != undefined){
    if(run){
      var localstoragemovies = JSON.parse(localStorage.getItem("FavoriteMovies")||'[]');
      setMoviesList(localstoragemovies);
      if(localstoragemovies.length != 0){
        localstoragemovies.forEach((movied:Movie) => {
          if(movie?.imdbID == movied.imdbID)
          {
            favorite = true;
            run = false;
            return;
          }
          return;
        });
        run = false;
      }
      else{
        run = false;
      }
      if(movie?.favorite != undefined)
      {
        run=false;
      }
    }
  }
  return (
    <div className="bg-gray-800" >
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className='mt-24 px-8 py-5 bg-gray-800 rounded-lg'>
            <h2 className="text-2xl font-extrabold tracking-tight text-white">{movie?.Title}</h2>
            <div className='flex flex-col lg:flex-row'>
            <div className='w-full lg:w-1/3'>
              <img
                src={movie?.Poster}
                alt={movie?.Title}
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div className='w-full bg-gray-800 rounded-lg ml-4 text-lg font-bold text-white flex flex-col'>
            <div className='mt-2'>
                Favorite : {!favorite ? 
                <div className="mt-1 z-50">
                  <button onClick={(e)=>addToFavorite(e)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffec00" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                  </svg>
                  </button>
                </div>
                :
                <div className="mt-1 z-50">
                  <button onClick={(e)=>removeFromFavorite(e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star-off" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffec00" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <line x1="3" y1="3" x2="21" y2="21" />
                      <path d="M10.012 6.016l1.981 -4.014l3.086 6.253l6.9 1l-4.421 4.304m.012 4.01l.588 3.426l-6.158 -3.245l-6.172 3.245l1.179 -6.873l-5 -4.867l6.327 -.917" />
                    </svg>
                  </button>
                </div>
                }
              </div>
              <div className='mt-2'>
                Actors : {movie?.Actors}
              </div>
              <div className='mt-2'>
                Awards : {movie?.Awards}
              </div>
              <div className='mt-2'>
                Director : {movie?.Director}
              </div>
              <div className='mt-2'>
                Plot : {movie?.Plot}
              </div>
              <div className='mt-2'>
                Country : {movie?.Country}
              </div>
              <div className='mt-2'>
                Type : {movie?.Type}
              </div>
              <div className='mt-2'>
                Rated : {movie?.Rated}
              </div>
              <div className='mt-2'>
                imdbVotes : {movie?.imdbVotes}
              </div>
              <div className='mt-2'>
                Metascore : {movie?.Metascore}
              </div>
              <div className='mt-2'>
                Genre : {movie?.Genre}
              </div>
              <div className='mt-2'>
                imdbRating : {movie?.imdbRating}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details