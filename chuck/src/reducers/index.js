import { GET_JOKE } from '../actions'

const initialState = {
    joke: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_JOKE:
            return state
        default:
            return state
    }
}
