import React, { MouseEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";
import {updateName} from '../features/MovieTitle';

interface Props{
    handleSearch: (e:React.MouseEvent<HTMLButtonElement>) =>void;
    MovieToSearch:(e:string) => void;
    MovieTitle:string;
}
var searchTitle = "";
function Navbar(){
const movie = useSelector((state:any)=>{ return state.movie.value.name});
const dispatch = useDispatch();
return (
    <nav className="fixed w-full flex items-center justify-between flex-wrap bg-gray-800 p-6 z-50">
        <a href="/" className="flex items-center flex-shrink-0 text-white mr-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
                    <span className="font-semibold text-xl tracking-tight">Movies Library</span>
        </a>
        <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded  border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
            
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
                <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">
                Movies
                </a>
                <a href="/Favorites" className="block mt-4 lg:inline-block lg:mt-0 text-white">
                Favorites
                </a>
            </div>
            <div>
                <div className="pt-2 relative mx-auto text-gray-600">
                    <input onChange={(e)=>searchTitle = e.target.value} className="border-2 border-gray-300  h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                        type="search" name="search" placeholder="Search"/>
                    <button onClick={()=>dispatch(updateName({"name":searchTitle}))} type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                        <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                        version="1.1" id="Capa_1" x="0px" y="0px"
                        viewBox="0 0 56.966 56.966"
                        width="512px" height="512px">
                        <path
                        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </nav>
)
}

export default Navbar