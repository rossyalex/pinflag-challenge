import { searchApi } from "../../services/wikipedia.js";
import { cardsComponent } from "../../components/cards.js";

export const searchApiWiki = async (search) => {
    if (search.length >= 3) {
        const response = await searchApi(search);
        cardsComponent(response)
    }
}