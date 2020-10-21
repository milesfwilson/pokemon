import MyPokemonController from './Controllers/MyPokemonController.js'
import ApiPokemonController from './Controllers/ApiPokemonController.js'

class App {
  apiPokemonController = new ApiPokemonController()
  myPokemonController = new MyPokemonController()
}

window["app"] = new App();
