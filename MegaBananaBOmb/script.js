const films = document.querySelector('.films')
const post = (film) => {
    const filmDiv = document.createElement('div')
    filmDiv.classList.add('film')
    filmDiv.innerHTML =
        `<div class = "border">
        <h2>${film.title}</h2>
        <p>Director: ${film.director}</p>
        <p>Producer: ${film.producer}</p>
        </div>
        `

    films.append(filmDiv)
}
const filmLoading = () => {
    const divLoading = document.createElement('div')
    divLoading.classList.add('load')
    divLoading.innerHTML =
        `<div class="loader">Load</div>
      </div>`

    films.append(divLoading)
}
const errorDie = () => {
    const delLoad = document.querySelector('.load')
    delLoad.innerHTML = ''
}
const errorLoad = () => {
    const erroDiv = document.createElement('div')
    erroDiv.classList.add('error')
    erroDiv.innerHTML =
        `<div class="error">error</div>`
    films.append(erroDiv)
}

const Corutina = async () => {
 filmLoading()
    try {
        const films = await fetch("https://swapi.dev/api/films")
        const banana = await films.json()
        BigBanana = banana.results.map(films => post(films))
    } catch (error) {
      errorLoad()
    } finally {
      errorDie ()
    }
}
window.load=   Corutina()