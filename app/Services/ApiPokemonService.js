import Pokemon from '../Models/Pokemon.js'
import { ProxyState } from '../AppState.js'
import { api } from './AxiosService.js'
export default class ApiPokemonService {

  constructor() {
    console.log("pokemon service")
    this.getPokemon()
  }
  setActive(name) {
    api.get(name).then(res => {
      ProxyState.activePokemon = new Pokemon(res.data)
    }).catch(err => console.error(err))
  }

  getPokemon() {
    api.get("").then(res => {
      ProxyState.apiPokemon = res.data.results
      console.log(ProxyState.apiPokemon)
    }).catch(err => console.error(err))
  }

}

export const apiPokemonService = new ApiPokemonService()