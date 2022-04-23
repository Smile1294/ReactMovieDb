import React, {  useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home';
import Details from './pages/Details';
import Favorites from './pages/Favorites';
import ErrorPage from './pages/ErrorPage';
import axios, { AxiosResponse } from 'axios';
import { Movie } from './models/Movie';
import { useSelector } from 'react-redux';
var page = 1;
var MoviesToDisplay:Movie[];
var prevMovie = "";
function App(){
  const movie = useSelector((state:any)=>{ return state.movie.value.name});
  if(prevMovie != movie)
  {
    if(movie != undefined)
    {
      if(movie != "")
      {
        axios.get<Movie[]>("http://omdbapi.com/?apikey=3118c827&s="+movie).then((response:AxiosResponse)=>
        {
          if(response.data.Response == "True")
          {
            setMoviesList(response.data.Search)
            localStorage.setItem("savedMovieName", movie);
            localStorage.setItem("Movies", JSON.stringify(response.data.Search));
            page = 1;
          ;}
        })
      }
    }
    prevMovie=movie;
  }
  const[moviesList,setMoviesList] = useState<Movie[]>([]);

  const leadMore = (e: React.MouseEvent<HTMLButtonElement>)=>
  {
    page++;
    axios.get<Movie[]>("http://omdbapi.com/?apikey=3118c827&s="+localStorage.getItem("savedMovieName")+"&page="+page).then((response:AxiosResponse)=>
    {
      if(response.data.Response == "True")
      {
        MoviesToDisplay=moviesList;
        MoviesToDisplay=MoviesToDisplay.concat(response.data.Search);
        setMoviesList(MoviesToDisplay);

      ;}
    })
  };
  useEffect(()=>{
    var localstoragemovies = JSON.parse(localStorage.getItem("Movies")||'[]');
    setMoviesList(localstoragemovies);
    
  }, [])
  return (
    <div className='bg-gray-800'>
      <Router>
          <Navbar/>
          <Routes>
            
            <Route path='/' element={<Home moviesList={moviesList} leadMore={leadMore}/>}/>
            <Route path='/movie/:string' element={<Details />}/>
            <Route path='/Favorites' element={<Favorites />}/>
            <Route path='*' element={<ErrorPage />}/>
          </Routes>
      </Router>
    </div>
  );
};

export default App;
