import {INCREMENT_COUNTER,DECREMENT_COUNTER,SET_COUNTER,INITIALIZE_COUNTER} from '../shared/constants'

export const initializeCounter = () => (dispatch)=>{
    dispatch({type : INITIALIZE_COUNTER});
}
export const decrementCounter = () => (dispatch)=>{
    dispatch({type : DECREMENT_COUNTER});
}
export const incrementCounter = () => (dispatch)=>{
    dispatch({type : INCREMENT_COUNTER});
}
export const setCounter = (counter) => (dispatch)=>{
    dispatch({type : SET_COUNTER, paylod : counter});
}