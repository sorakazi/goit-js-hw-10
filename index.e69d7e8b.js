function e(e){return fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_mWBQFiOeKj4V3pA9w1suKA2oCAa063wtxMcHBAZYTMnzrMosvE0LuJnYSfFHIUWM&breed_ids=${e}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}const t=document.querySelector(".breed-select"),n=document.querySelector(".cat-info"),r=document.querySelector(".loader");document.querySelector(".error");fetch("https://api.thecatapi.com/v1/breeds?api_key=live_mWBQFiOeKj4V3pA9w1suKA2oCAa063wtxMcHBAZYTMnzrMosvE0LuJnYSfFHIUWM").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>{r.classList.replace("loader","is-hidden");let n=e.map((({name:e,id:t})=>`<option value=${t}>${e}</option>`));t.insertAdjacentHTML("beforeend",n),t.classList.remove("is-hidden")})),t.addEventListener("change",(t=>{e(t.target.value).then((e=>{const{url:t,breeds:r}=e[0],{name:o,description:i,temperament:s}=r[0];n.innerHTML=`<img src ='${t}' alt ='{name}'  width ="400"/>\n    <div class= 'box'>\n    <h2>${o}</h2>\n    <h2>${i}</h2>\n    <h2>${s}</h2>\n    </div>\n    `}))}));
//# sourceMappingURL=index.e69d7e8b.js.map