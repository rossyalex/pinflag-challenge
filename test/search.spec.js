import { searchComponent } from "../components/search.js";
import { searchApiWiki } from "../logic/search/index.js";
import { searchApi } from "../services/wikipedia.js";
import { cardsComponent } from "../components/cards.js";
import {jest} from "@jest/globals";

jest.mock('../services/wikipedia.js');
jest.mock('../components/cards.js');

describe('search Test', () => {
    it('searchComponent should be a function', function () {
        expect(typeof searchComponent).toBe('function')
    });
    it('searchApiWiki should be a object', function () {
        expect(typeof searchApiWiki('mouse')).toBe('object')
    });

    it('should be HTML', function () {
        const search = searchComponent();
        expect(search).toContain('text-center');
    });
})

describe("searchApiWiki", () => {
    it("should call searchApi and cardsComponent when search string has more than 3 letters", async () => {
        const search = "example";
        const mockResponse = [{ title: "Title 1" }, { title: "Title 2" }];

        // Mockear la función searchApi para que retorne el resultado esperado
        searchApi.mockResolvedValue(mockResponse);

        await searchApiWiki(search);

        // Verificar que searchApi haya sido llamada con el argumento correcto
        expect(searchApi).toHaveBeenCalledWith(search);

        // Verificar que cardsComponent haya sido llamada con el resultado de searchApi
        expect(cardsComponent).toHaveBeenCalledWith(mockResponse);
    });

    it("should not call searchApi and cardsComponent when search string has 3 or fewer letters", async () => {
        const search = "ab"; // Longitud menor a 3 letras

        await searchApiWiki(search);

        // Verificar que searchApi no haya sido llamada
        expect(searchApi).not.toHaveBeenCalled();

        // Verificar que cardsComponent no haya sido llamada
        expect(cardsComponent).not.toHaveBeenCalled();
    });
});