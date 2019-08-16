import axios from 'axios'

export const GET_JOKE = 'GET_JOKE'

export const getJoke = () => dispatch => {
    axios.get('http://api.icndb.com/jokes/random?firstName=John&amp;lastName=Doe')
        .then(rez => console.log(rez.data))
        .catch(err => console.log(err))
}
