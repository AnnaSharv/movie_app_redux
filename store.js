import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './redux/rootReducer'

const store = () => {
    return createStore(rootReducer, applyMiddleware(thunk))
}

export default store