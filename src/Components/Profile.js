
import React, {useState, useEffect} from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'

import Films from './Films'

const Profile = () => {

  const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8fa1810331d1835c50997615020e81a7&page=1'

  const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=8fa1810331d1835c50997615020e81a7&query='

  const [movies, setMovies] = useState([])
  const [word, setWord] = useState('')
  

  async function getData(API) {
      const response = await fetch(API)
      const retrievedData = await response.json()
      setMovies(retrievedData.results)
  }

  useEffect(() => {
    getData(FEATURED_API)
  }, [])


  const handleSubmit = (e) => {
    getData(SEARCH_API + word)
    e.preventDefault();
    setWord('')
  }


  const handleChange = (e) => {
    setWord(e.target.value)
  }

  return (
    <>
    <Router>
      <header className='header'>
        <form onSubmit={handleSubmit}>
            <label htmlFor='word' className='form_label'>Search Movie!</label>
            <input className='search form_field' type='search' placeholder='Search...' value={word} name='word' onChange={handleChange}/>
        </form>
      </header>
      <div className='movie-container'>
        {movies.length > 0 && movies.map((movie) => {
          return <Films key={movie.id}{...movie} />
        })}
      </div>
     </Router>
    </>

  )
}

export default Profile

