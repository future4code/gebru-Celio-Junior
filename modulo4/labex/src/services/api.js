import axios from 'axios'

export const API = axios.create({
  baseURL: 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/celio/',
})
