import React from "react";
import search from '../assets/search-icon.png';
import { Movies } from "./Movies";
import axios from 'axios';
import { HomeMovies } from "./HomeMovies";
import NavBar from "./NavBar";

const API_KEY = "ed585377";

function Home() {
    const [searchQuery, setSearchQuery] = React.useState("");
    const [timeoutId,setTimeoutId] = React.useState();
    const [movieList, setMovieList] = React.useState([]);
    const [selectedMovie, setSelectedMovie] = React.useState();

    const fetchData = async (searchString)=>{
        const response = await axios.get(`https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`)
        setMovieList(response.data.Search)
    };


    const onTextChange = (event) =>{
        setSearchQuery(event.target.value);
         const timeout = setTimeout(()=>fetchData(event.target.value),500);
         setTimeoutId(timeout);
    }



    return (
    <div className="w-full">
      <NavBar />
            <div className="w-full h-screen">
                <h1 className="text-4xl m-5">Welcome to the best movie review site!</h1>

                <div className="flex m-5"><span><img className="w-7 h-7" src={search} alt="Search"/></span>
                    <input type="text" value={searchQuery} onChange={onTextChange} placeholder="Search movies..." />
                </div>


                {/* cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-10">
                    {movieList?.length? movieList.map((movie,index)=><Movies key={index} movie={movie}  onMovieSelect={setSelectedMovie} />): <h2 className="text-2xl">Classic Hits are here !!</h2>}
                </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-10">
                    <HomeMovies />
               </div>
               
            </div>
          
            
        </div>
        
    )
    
}

export default  Home; 