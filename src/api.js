const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = `live_mWBQFiOeKj4V3pA9w1suKA2oCAa063wtxMcHBAZYTMnzrMosvE0LuJnYSfFHIUWM`;

export function fetchBreeds() {
  return fetch(`${BASE_URL}?api_key={API_KEY}`).then(res => {
    if (!res.ok) throw new Error(res.status);
    return res.json();
  });
}

export function fetchCatByBreed() {
  return fetch(`${BASE_URL}?api_key={API_KEY}`).then(res => {
    if (!res.ok) throw new Error(res.status);
    return res.json();
  });
}
