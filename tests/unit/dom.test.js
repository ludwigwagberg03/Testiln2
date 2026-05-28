import { describe, it, expect } from "vitest";
import { renderPokemon } from "../../js/dom.js";

describe("DOM rendering", () => {

    it("ska rendera pokemonnamn", () => {

        document.body.innerHTML = `
      <div id="pokemon"></div>
    `;

        renderPokemon({
            name: "pikachu",
            sprites: {
                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
            }
        });

        expect(document.querySelector("h2").textContent)
            .toBe("pikachu");
    });
});