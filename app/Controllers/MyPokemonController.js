import { ProxyState } from '../AppState.js'
import { myPokemonService } from '../Services/MyPokemonService.js'



function _drawMyPokemon() {
  let template = ''
  ProxyState.myPokemon.forEach(p => template += p.Pokedex)
  document.getElementById('myPokemon').innerHTML = template
}
export default class MyPokemonController {
  constructor() {
    console.log("my controller")
    ProxyState.on("myPokemon", _drawMyPokemon)
  }

  catch(name) {
    console.log(name, "from controller")
    myPokemonService.catch(name)
  }

  makeActive(name) {
    myPokemonService.makeActive(name)
  }

  release(name) {
    myPokemonService.release(name)

  }
}