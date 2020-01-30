import { ADD_ICECREAM, BUY_ICECREAM } from "./iceCreamActionTypes"

const initialState = {
    numOfIceCreams : 15
}

const iceCreamReducer = (state = initialState, action ) => {
    switch(action.type){
        case ADD_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + 1
            }
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
        default:
            return state
    }
}

export default iceCreamReducer