import { apiPokemonService } from '../Services/ApiPokemonService.js'
import { ProxyState } from '../AppState.js'


function _draw() {
  let template = ""
  ProxyState.apiPokemon.forEach(p => template += `<li onclick="app.apiPokemonController.setActive('${p.name}')">
  ${p.name}
  </li>`)
  document.getElementById("apiPokemon").innerHTML = template
}

function _drawActive() {
  document.getElementById("activePokemon").innerHTML = ProxyState.activePokemon.Template
}
export default class ApiPokemonController {
  constructor() {
    console.log("hello from controller")
    ProxyState.on("apiPokemon", _draw)
    ProxyState.on("activePokemon", _drawActive)
  }

  setActive(name) {
    apiPokemonService.setActive(name)
  }


}