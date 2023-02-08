import * as types from './buttonActions.actionTypes'
//shekitxva  oddOrEvenze!!!

const initialState = {
    buttonVal:0,
    oddOrEven: "we don't know yet"
}

const changeButtonValue = (state = initialState, action) => {
    switch (action.type) {
        case types.INCREMENT:
            return {
               ...state,
               buttonVal : state.buttonVal + 1,
               oddOrEven: (state.buttonVal + 1) % 2 === 1 ? `odd ${state.buttonVal}` : `even ${state.buttonVal}`
            }

        case types.DECREMENT:
            return {
                ...state,
                buttonVal: state.buttonVal - 1,
                oddOrEven: (state.buttonVal - 1) % 2 === 1 ? `odd ${state.buttonVal}` : `even ${state.buttonVal}`
            }

        default:
           return state
    }
}

export default changeButtonValue