import { describe, it, expect } from "vitest";
import { fetchPokemon } from "../../js/api.js";

describe("API integration", () => {

    it("ska hämta pokemon från API", async () => {

        const data = await fetchPokemon("pikachu");

        expect(data.name).toBe("pikachu");
    });
});