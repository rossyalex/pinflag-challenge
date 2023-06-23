import axios from "axios";

export const searchApi = async (search) => {
    try {
        const response = await axios.get(`https://es.wikipedia.org/w/rest.php/v1/search/title?q=${search}&limit=6`)
        if (response.data) return response.data.pages;
    } catch (e) {
        throw new Error('Error request Wiki');
    }
}