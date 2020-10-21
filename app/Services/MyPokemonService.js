import Pokemon from '../Models/Pokemon.js'
import { ProxyState } from '../AppState.js'
import { api, myApi } from './AxiosService.js'
export default class MyPokemonService {
  constructor() {
    console.log("my service")
    this.getMyPokemon()
  }
  release(id) {
    myApi.delete(id).then(res => {
      this.getMyPokemon()
    }).catch(err => console.error(err))
  }
  catch(name) {
    myApi.post("", ProxyState.activePokemon).then(res => {
      this.getMyPokemon()
      // console.log(res.data.data)
      // ProxyState.myPokemon = [...ProxyState.myPokemon, new Pokemon(res.data.data)]
    }).catch(err => console.error(err))
  }

  getMyPokemon() {
    myApi.get("").then(res => {
      console.log(res.data.data)
      ProxyState.myPokemon = res.data.data.map(p => new Pokemon(p))
    }).catch(err => console.error(err))
  }
  makeActive(name) {
    ProxyState.activePokemon = ProxyState.myPokemon.find(p => p.name == name)
  }

}

export const myPokemonService = new MyPokemonService()