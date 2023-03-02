const movieInitialState =[]

const movieReducer = (state = movieInitialState, action)=>{
    switch(action.type){
            case "ADD_MOVIE":{
                return [...state,{...action.payload}]
            }

            case "REMOVE_MOVIE" :{
                return state.filter((ele)=>{
                    if(ele.id !== action.payload){
                        return {...ele}
                    }
                })
            }

        default :{
            return state
        }
    
    }   
}
export default movieReducer