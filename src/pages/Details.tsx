import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios';
import { Movie } from '../models/Movie';

const Details = () => {
  var id = window.location.href.split("movie/")[1];
  const[movie,setMovie] = useState<Movie>();

  useEffect(()=>{
    axios.get<Movie>("http://omdbapi.com/?apikey=3118c827&s=&i="+id).then((response:AxiosResponse)=>
    {
      if(response.data.Response == "True")
        {
          setMovie(response.data);
        ;}
    })
    
  }, [])
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
                Favorite : {movie?.favorite}
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