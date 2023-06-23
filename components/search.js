import imgLogo from '../assets/img/logowiki.png';

export const searchComponent = () => {
    return `<div class="row">
      <div class="col-4"></div>
      <div class="col-4 text-center">
        <img src="${imgLogo}" class="imageLogo mx-auto" alt="Logo">
      </div>
      <div class="col-2"></div>
    </div>
    <div class="row mt-4">
      <div class="col-4"></div>
      <div class="col-4">
        <label for="inputSearch" class="form-label text-center">Ingrese su busqueda</label>
        <input type="text" id="inputSearch" class="form-control" aria-labelledby="inputSearch" />
      </div>
      <div class="col-4"></div>
    </div>
    <div id="cardSearch" class="row mx-auto">
    </div>
    `
}