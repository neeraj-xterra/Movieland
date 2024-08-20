import React, { useState } from "react";
import { useEffect } from "react";

import './App.css';
import searchIcon from './search.svg'
import MovieCard from "./MovieCard";


//4d32655 
const API_URL='http://www.omdbapi.com?apikey=4d32655'

const movie1={
    "Title": "Batman v Superman: Dawn of Justice (Ultimate Edition)",
    "Year": "2016",
    "imdbID": "tt18689424",
    "Type": "movie",
  //  "Poster": "https://m.media-amazon.com/images/M/MV5BOTRlNWQwM2ItNjkyZC00MGI3LThkYjktZmE5N2FlMzcyNTIyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"
    "Poster":"N/A"
}

const App=()=>{

    const [movies,setMovies]=useState([]);
    const [searchTerm,setSearchTerm]=useState('');

    const searchMovies= async (title)=>{
        const response=await fetch(`${API_URL}&s=${title}`);
        const data= await response.json();
        setMovies(data.Search);
       // console.log(data.Search);
    };


    useEffect(()=>{
        searchMovies('Superman');
    },[]);

    return(
        <div className="app">
            <h1> Movieland</h1>
            <div className="search">
                <input placeholder="Search for movies" 
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                />
                <img src={searchIcon} alt="search-icon" 
                onClick={()=>searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length >0 ?
                (
                    <div className="container">
                    {  movies.map((movie)=>(
                            <MovieCard movie1={movie} />
                        ))
                    }
                      
                    
                    </div>
                ):(
                    <div classname="empty">
                    <h2>No movies found</h2>
                    </div>
                )
            }
            
        </div>
    );

}

export default App;