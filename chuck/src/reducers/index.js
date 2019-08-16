import { GET_JOKE } from '../actions'

const initialState = {
    joke: '',
    gotten: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_JOKE:
            return {
                ...state,
                joke: action.payload,
                gotten: true
            }
        default:
            return state
    }
}
