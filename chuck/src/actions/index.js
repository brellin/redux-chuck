import axios from 'axios'

export const GET_JOKE = 'GET_JOKE'

export const getJoke = () => dispatch => {
    axios
        .get('http://api.icndb.com/jokes/random?firstName=John&amp;lastName=Doe')
        .then(rez => dispatch({ type: GET_JOKE, payload: rez.data.value.joke }))
        .catch(err => console.log(err))
}
