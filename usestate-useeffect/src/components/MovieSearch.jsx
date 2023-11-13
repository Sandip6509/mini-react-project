import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieList from './MovieList'
const MovieSearch = () => {
    const [searchTerm,setSearchTerm] = useState('')
    const [movies,setMovies] = useState([])

    const apiKey = import.meta.env.VITE_OMDB_KEY;

    useEffect(() => {
        fetchMovies()
    },[]);
    
    useEffect(() => {
        fetchMovies()
    },[searchTerm]);

    const fetchMovies = async () => {
        try {
            const response = await axios.get(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`);
            console.log(response);
            setMovies(response.data.Search || []);
        } catch (error) {
            console.error(error);
        }
    }

    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        fetchMovies();
    }
    return (
        <div>
            <div className='mt-5 mb-5'>
                <form onSubmit={handleFormSubmit}>
                    <div className='flex space-x-3'>
                        <input 
                            type='text'
                            value={searchTerm}
                            onChange={handleSearchInputChange}
                            placeholder="Search movies..."
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ml-3'
                        />    
                        <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-2'>Search</button>
                    </div>
                </form>
            </div>
            <MovieList movies={movies}/>
        </div>
    )
}

export default MovieSearch