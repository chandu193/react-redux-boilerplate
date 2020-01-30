import {BUY_CAKE, ADD_CAKE} from './actionTypes'

export const buyCake = (payload) => {
    return {
        type: BUY_CAKE,
        payload
    }
}

export const addCake = (payload) => {
    return {
        type: ADD_CAKE,
        payload
    }
}