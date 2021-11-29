import React from 'react'

const IMAGE_API = 'https://image.tmdb.org/t/p/w500/'

const Films = ({title, poster_path, vote_average}) => {

  return (
    <div className='movie'>
      <img src={poster_path ? IMAGE_API + poster_path : "https://images.unsplash.com/photo-1594908900066-3f47337549d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"} />
      <div className='film-info'>
        <h3>{title}</h3>
        <span>{vote_average}</span>
      </div>
    </div>
  )
}

export default Films



