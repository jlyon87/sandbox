import axios from 'axios'
import { baseURL, apikey } from './tmdb.config'

const POPULAR = '/movie/popular'
const tmdb = axios.create({
  baseURL,
  params: {
    api_key: apikey
  }
})

export const getPopularMovies = () => {
  return tmdb.get(POPULAR)
    .then(res => res.data.results)
}
