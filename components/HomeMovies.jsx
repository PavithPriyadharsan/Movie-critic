import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = "ed585377";

export function HomeMovies(props) {
    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://www.omdbapi.com/?s=iron&apikey=${API_KEY}`);
                setMovieData(response.data.Search);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            {movieData && movieData.map(movie => (
                <div key={movie.imdbID} className="flex flex-col flex-wrap w-full max-w-sm bg-gray-300 rounded-xl shadow-md overflow-hidden md:max-w-80 md:max-h-90 m-4">
                    <div className="w-full h-100 object-cover">
                        <img src={movie.Poster} alt="" />
                    </div>
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2 space-evenly">
                            <h5 className="text-xl font-medium text-black overflow-hidden">{movie.Title}</h5>
                            <p className="text-gray-500">Released on: {movie.Year}</p>
                            <p className="font-bold text-gray-500">Rating: {movie.imdbRating}</p>
                            <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-teal-500 rounded-lg hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 mb-2">
                                Read more
                                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
      </>
    )
}
