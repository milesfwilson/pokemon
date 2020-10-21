// @ts-ignore
export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
  timeout: 3000
})

// @ts-ignore
export const myApi = axios.create({
  baseURL: "http://bcw-sandbox.herokuapp.com/api/miles/pokemon",
  timeout: 10000
})