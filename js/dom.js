export function renderPokemon(data) {

  document.querySelector('#pokemon').innerHTML = `
    <h2>${data.name}</h2>
    <img src="${data.sprites.front_default}" alt="">
  `;
}

export function renderError(message) {
  
  document.querySelector('#pokemon').innerHTML = `
    <p>${message}</p>
  `;
}