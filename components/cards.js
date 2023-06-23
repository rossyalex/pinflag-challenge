export const cardsComponent = (dataPages) => {
    const cards = document.getElementById('cardSearch');
    cards.innerHTML = "";
    dataPages.forEach((card) => {
        cards.innerHTML += `
            <div class="card m-2 cardInfo" >
                <div class="card-body">
                  <h5 class="card-title">${card.title}</h5>
                  <p class="card-text">${card.description  ?? 'No hay información'}</p>
                  <a href="https://es.wikipedia.org/wiki/${card.key}" target="_blank" class="btn btn-info">Ir al sitio</a>
                </div>
          </div>
        `;
    })
}