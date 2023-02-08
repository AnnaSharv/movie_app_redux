import * as types from './favorites.actionTypes'

const initialState = {
    movieList: [],
    movieNumber: 0
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.ADD_FAVORITE_MOVIE:
         return {
            ...state,
            movieList: [...state.movieList, action.payload],
            movieNumber: state.movieNumber + 1
         }

        case types.DELETE_FAVORITE_MOVIE:
            console.log(state, action, 'tttttt')

            return {
                ...state,
                movieList: state.movieList.filter(movie => movie.imdbID !== action.payload.imdbID),
                movieNumber: state.movieNumber - 1
            }
        
        default:
           return state
    }
       
}

export default favoritesReducer