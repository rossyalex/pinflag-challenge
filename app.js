import { searchComponent } from "./components/search.js";
import { searchApiWiki } from "./logic/search/index.js";


export const app = () => {
    return document.querySelector('#app').innerHTML = `
      <div class="container">
        ${searchComponent()}
      </div>
    `
}

export const searchConfig = () => {
    const inputSearch = document.getElementById('inputSearch');
    inputSearch.addEventListener("input", searchInput);
}

export async function searchInput (e) {
    await searchApiWiki(e.target.value);
}
