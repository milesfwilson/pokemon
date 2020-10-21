export default class Pokemon {
  constructor(data) {
    this.id = data._id
    this.name = data.name
    this.weight = data.weight
    this.height = data.height
    this.img = data.img || data.sprites.front_default + '^' + data.sprites.back_default + '^' + data.sprites.front_shiny
  }

  get Template() {
    return /*html*/ `
    <div class="card shadow text-center rounded mt-3 px-3 hover">
    ${this.Catch}
    <img src="${this.img.split('^')[0]}" class="card-img">

    <div class="d-flex justify-content-center">
    <img src="${this.img.split('^')[1]}" class="img-fluid">
    <img src="${this.img.split('^')[2]}" class="img-fluid">
    </div>
<h2>${this.name}</h2>

<div class="text-left p-3">
<p>Height: ${this.height} ft </p>
<p>Weight: ${this.weight} lbs</p>
</div>
</div>
`

  }


  get Catch() {

    if (this.id) {

      return /*html*/`



      <button class="btn btn-danger mt-2" onclick="app.myPokemonController.release('${this.id}')">Release</button>
      `
    } else {

      return `
      <button class="btn btn-primary mt-2" onclick="app.myPokemonController.catch('${this.name}')">Catch</button>

      `
    }


  }

  get Pokedex() {
    return /*html*/ `

    <img class="hover" onclick="app.myPokemonController.makeActive('${this.name}')" src="${this.img.split('^')[0]}" class="img-fluid" alt=""/>
    

`
  }


}