import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'

const MoviesList = (props) => {

  const[search, setSearch]=React.useState("")
  const movies = useSelector((state)=>{
    return state.movies;
  })

  const handleSearch=(e)=>{
    setSearch(e.target.value)
  }

  return (
    <div className='NotFound'>
        <div>
          <div>
            { movies.length === 0 ?(
              <div>
                <h1>Unlimited Movies, TV Shows and More...</h1>
            <h2>Add your favourite movies.delete anytime </h2>
              </div>
            ):(
              <div className='MoviesList'>
                <h2>Total List:{movies.length}</h2>
                <input type="text" 
                   value={search} 
                   onChange={handleSearch}
                   placeholder="Search by name ....."
                  />
                   {movies.map((ele) => {
                return <MovieCard key={ele.id} {...ele} />;
              })}
              </div>
            )}
          </div>
        
      </div>
      </div>
  )
}

export default MoviesList
