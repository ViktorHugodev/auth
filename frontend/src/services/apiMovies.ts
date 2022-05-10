import axios from 'axios'

const apiKey = process.env.NEXT_TMDB_APIKEY

export const apiMovies = axios.create({
  baseURL: `https://api.themoviedb.org/3/discover/tv?with_network=213&language=pt-BR&api_key=${apiKey}`
})

export const apiTest = axios.create({
  baseURL: `http://localhost:3333/classes`
})