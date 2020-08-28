import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://recipes-by-ingredients-285703.firebaseio.com/'
});

export default instance;