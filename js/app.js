import { fetchPokemon } from "./api.js";
import { renderPokemon, renderError } from "./dom.js";
import { isValidInput } from "./utils.js";

const button = document.querySelector('#searchBtn');

button.addEventListener('click', async () => {

    const input = document.querySelector('#input').value;

    if (!isValidInput(input)) {
        renderError("Skriv ett pokemonnamn");
        return;
    }

    try {
        const data = await fetchPokemon(input);
        console.log(data)
        renderPokemon(data);

    } catch (error) {
        renderError(error.message);
    }
});