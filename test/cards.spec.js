import {cardsComponent} from "../components/cards.js";
import {getByTestId} from "@testing-library/dom";

const housesData = [
    {
        "id": 186046,
        "key": "Casa",
        "title": "Casa",
        "excerpt": "Casa",
        "matched_title": null,
        "description": "edificación construida para ser habitada",
        "thumbnail": {
            "mimetype": "image/jpeg",
            "width": 60,
            "height": 69,
            "duration": null,
            "url": "//upload.wikimedia.org/wikipedia/commons/thumb/5/5e/57_The_Close%2C_Salisbury.jpg/60px-57_The_Close%2C_Salisbury.jpg"
        }
    },
    {
        "id": 41537,
        "key": "Casa_de_Habsburgo",
        "title": "Casa de Habsburgo",
        "excerpt": "Casa de Habsburgo",
        "matched_title": null,
        "description": "Casa imperial europea",
        "thumbnail": {
            "mimetype": "image/svg+xml",
            "width": 60,
            "height": 70,
            "duration": null,
            "url": "//upload.wikimedia.org/wikipedia/commons/thumb/5/57/Arms_of_Counts_of_Habsbourg.svg/60px-Arms_of_Counts_of_Habsbourg.svg.png"
        }
    },
]

describe('Cards test', () => {
    it('should card div exists', function () {
        document.body.innerHTML = '<div id="cardSearch"></div>';
        const cardSearch = document.getElementById('cardSearch');
        expect(cardSearch).toBeInTheDocument();
    });
    it('should card renderer', function () {
        document.body.innerHTML = '<div id="cardSearch"></div>';
        cardsComponent(housesData);
        const cardsRenderer = document.querySelector('.cardInfo');
        expect(cardsRenderer).toHaveClass('cardInfo')
    });
})