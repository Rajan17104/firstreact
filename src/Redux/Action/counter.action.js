import * as ActionTypes from '../ActionTypes'


export const increment = () => (dispatch) => {
    dispatch({type: ActionTypes.INCREMENT_COUNTER})
}

export const decremet = () => (dispatch) => {
    dispatch({type: ActionTypes.DECREMENT_COUNTER})

}