import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducers'
import iceCreanReducer from './iceCream/iceCreamReducers'
import iceCreamReducer from './iceCream/iceCreamReducers'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export default rootReducer