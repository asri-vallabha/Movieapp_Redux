
export const add_movie=(movie)=>{

    return {
        type: "ADD_MOVIE",
        payload:movie
    }
}

export const remove_movie=(id)=>{
    return {
        type :"REMOVE_MOVIE",
        payload:id
    }
}