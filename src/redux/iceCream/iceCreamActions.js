import {
    ADD_ICECREAM,
    BUY_ICECREAM
} from './iceCreamActionTypes'

export const buyIceCream = (payload) => {
    return {
        type: BUY_ICECREAM,
        payload
    }
} 

export const addIceCream = (payload) => ({
    type: ADD_ICECREAM,
    payload
})