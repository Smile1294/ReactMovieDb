import React from 'react'
import Movies from '../components/Movies'
import { Movie } from '../models/Movie';
interface Props{
  moviesList: (Movie[]);
  leadMore: (e:React.MouseEvent<HTMLButtonElement>) =>void;

}
const Home: React.FC<Props> = ({moviesList,leadMore})=> {
  return (
    <div>
      <Movies moviesList={moviesList} leadMore={leadMore}></Movies>
    </div>
  )
}

export default Home