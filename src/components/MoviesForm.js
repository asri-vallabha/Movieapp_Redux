import React from 'react'
import {useDispatch} from "react-redux"
import {add_movie} from "../actions/movieActions"

const MoviesForm = (props) => {
  const dispatch=useDispatch()


  const [movie, setMovie]=React.useState("")
  const [rate, setRate]=React.useState("")
  const [year,setYear]=React.useState("")
  const [descreption, setDecreption]=React.useState("")
  const[formErrors, setFormErrors]=React.useState({})

  const errors ={}

  const runValidations=()=>{
    if(movie.length === 0){
        errors.movie ="Movie Cannot be Blank"
    }
    
    if(rate.length === 0){
      errors.rate ="Rating Cannot be Blank"
    }else if(rate>10){
      errors.rate ="Ranking should be greater than 10"
    }
    
    if(year.length === 0){
      errors.year ="year Cannot be Blank"
    }else if((year<1900 || year>2023)){
      errors.year ="year should not be less than 1900 & greater than 2023"
    }

    if(movie.length === 0){
      errors.descreption ="Descreption cannot be blank"
    }else if(descreption.length >100){
      errors.descreption = "Max space Exceed"
    }
  }
  

  const handleMovieChange=(e)=>{
    setMovie(e.target.value)
  }

  const handleRankChange=(e)=>{
    setRate(e.target.value)
  }

  const handleYearChange=(e)=>{
    setYear(e.target.value)
  }

  const handleDescreptionChange=(e)=>{
    setDecreption(e.target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault()

    runValidations()
    if(Object.keys(errors).length === 0){
      setFormErrors({})

      const movieList={
        id: Number(new Date()),
        movieValue : movie,
        rateValue :Number(rate),
        year :Number(year),
        descreptionValue: descreption
      }
      dispatch(add_movie(movieList))
      setMovie("")
      setRate("")
      setYear("")
      setDecreption("")
    }else{
      setFormErrors(errors)
    }
   
  }
  return (
    <div className='completeForm'>
            <h3>Add Movie</h3>
      <form onSubmit={handleSubmit}>
      <div className='input'>
            <input type="text" 
            value={movie}
               placeholder="Enter movie name" 
               onChange={handleMovieChange}
               />
               {formErrors.movie && (
                <span className="text-danger"><b>{formErrors.movie}</b></span>
               )}
        </div>

        <div className='input'>
            <input type="text" 
               value={rate}
               placeholder="IMDB Rating" 
               onChange={handleRankChange}
                />
               {formErrors.rate && (
                <span className="text-danger"><b>{formErrors.rate}</b></span>
               )}
        </div>

        <div className='input'>
            <input type="text" 
                value={year}
               placeholder="Year of Release"
               onChange={handleYearChange}
                />
               {formErrors.year && (
                <span className="text-danger"><b>{formErrors.year}</b></span>
               )}
        </div>

        <div className='input'>
            <input type="text" 
                value={descreption}
               placeholder="Something about Movie" 
               onChange={handleDescreptionChange}
                />
               {formErrors.descreption && (
                <span className="text-danger"><b>{formErrors.descreption}</b></span>
               )}
        </div>
        <div className='button'>
            <button type="submit" value="submit">ADD</button>
        </div>
        
      </form>
      
    </div>
  )
}

export default MoviesForm




    
  