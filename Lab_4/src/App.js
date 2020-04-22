import AboutPage from './About.js';
import PokeAPI from './PokeApi.js';

// This is used for routing over tabs

const routes = {
    'about': AboutPage,
    'pokeapi': PokeAPI
}

//Stores the number of the last chunk of your URL

let length = 0;

// Routing handler, rendering page 

const handler = async () => {
    const content = null || document.getElementById('content');
    const url = window.location.href.toString();
    const parsedURL = url.split('/')[length];
    let page = routes[parsedURL] ? routes[parsedURL] : "Error 404";

    if (page === "Error 404"){
        content.innerHTML = `<h2>Error 404: page not found</h2>`;
        throw new Error("Error 404: page not found");
    } else {
        content.innerHTML = await page.render();
        page.after_render();
    }
}

window.addEventListener("load", () => {

    // On the page load we manually construct the URL in order to
    // prevent some of possible errors with it.

    const url = window.location.href.toString();
    const parsedURL = url.split('/');
    let addr = parsedURL[0];
    length != 0 ? length = 0 : length = length;
    while (!(parsedURL[length].toString().includes('lab_4.html'))) {
        length++;
    }
    length++;

    if (!routes[parsedURL[length]]) {
        for (let i = 1; i < length; i++) {
            addr += '/' + parsedURL[i];
        }
        window.location = addr + '#/about'
    }
    else handler();

});

//In case of changing the url we are taking control over it

window.addEventListener("hashchange", handler);
