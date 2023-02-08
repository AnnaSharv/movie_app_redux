import * as types from "./favorites.actionTypes";

export const addFavoriteMovie = (favorite) => {
    return async dispatch => {
        try {
            console.log("fav actions", favorite)
           dispatch({type: types.ADD_FAVORITE_MOVIE, addFavoriteMovie: favorite})
        }
        catch(err) {
            console.log("error in fav.actions", err)
        }
    }
}