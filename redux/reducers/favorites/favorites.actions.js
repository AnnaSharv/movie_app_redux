import * as types from "./favorites.actionTypes";

export const addFavoriteMovie = (favorite) => {
    return async dispatch => {
        try {
           dispatch({type: types.ADD_FAVORITE_MOVIE, addFavoriteMovie: favorite})
        }
        catch(err) {
            console.log("error in fav.actions", err)
        }
    }
}

export const deleteFavoriteMovie = (favorite) => {
    return async dispatch => {
        try {
            dispatch({type: types.DELETE_FAVORITE_MOVIE, deleteFavoriteMovie: favorite})
        } catch(err) {
            console.log("err", err)
        }
    }
}