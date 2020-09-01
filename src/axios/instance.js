import axios from 'axios'
export default axios.create({
  baseURL: "https://recipes-by-ingredients-285703.firebaseio.com/"
});