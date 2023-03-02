import React from 'react'
import MoviesForm from "./MoviesForm"
import MoviesList from './MoviesList'
import "./style.scss"

const MoviesContainer = (props) => {
  return (
    <div className='Container'>
      <div className='ContainerMovieList'>
                <MoviesList/>
      </div>
      <div className='ContainerMovieForm'>
                <MoviesForm/>
      </div>

        
        
    </div>
  )
}

export default MoviesContainer

