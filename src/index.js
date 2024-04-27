import { fetchBreeds, fetchCatByBreed } from './cat-api';

const breedSelectEl = document.querySelector('.breed-select');
const catInfoEl = document.querySelector('.cat-info');
const loaderEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');

function chooseBreed() {
  fetchBreeds()
    .then(data => {
      loaderEl.classList.replace('loader', 'is-hidden');
      // console.log(data);
      let optionsMarkup = data.map(({ name, id }) => {
        return `<option value=${id}>${name}</option>`;
      });

      breedSelectEl.insertAdjacentHTML('beforeend', optionsMarkup);
      breedSelectEl.classList.remove('is-hidden');
    })
    .catch(onError);
}
chooseBreed();

breedSelectEl.addEventListener('change', e => {
  // alert(e.target.value);
  loaderEl.classList.replace('is-hidden', 'loader');
  breedSelectEl.classList.add('is-hidden');
  catInfoEl.classList.add('is-hidden');
  let breedId = e.target.value;
  fetchCatByBreed(breedId)
    .then(data => {
      const { url, breeds } = data[0];
      const { name, description, temperament } = breeds[0];
      catInfoEl.innerHTML = `<img src ='${url}' alt ='{name}'  width ="400"/>
    <div class= 'box'>
    <h2>${name}</h2>
    <h2>${description}</h2>
    <h2>${temperament}</h2>
    </div>
    `;
      catInfoEl.classList.remove('is-hidden');
      breedSelectEl.classList.remove('is-hidden');
      loaderEl.classList.add('is-hidden');
    })
    .catch(onError);
});
function onError() {
  errorEl.classList.remove('is-hidden');
  breedSelectEl.classList.add('is-hidden');
}
