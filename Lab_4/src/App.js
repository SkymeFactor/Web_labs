import AboutPage from './About.js';
import PokeAPI from './PokeApi.js';

// This is used for routing over tabs

const routes = {
    'about': AboutPage,
    'pokeapi': PokeAPI
}

// Routing handler, rendering page 

const handler = async () => {
    const content = null || document.getElementById('content');
    let url = window.location.href.toString().toLowerCase();
    let parsedURL = url.split('/')[4];
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

    let url = window.location.href.toString().toLowerCase();
    let parsedURL = url.split('/');
    let addr = parsedURL[0];

    if (!routes[parsedURL[4]]) {
        for (let i = 1; i < 4; i++) {
            addr += '/' + parsedURL[i]
        }
        window.location = addr + '#/about'
    }
    else handler();

});

//In case of changing the url we are taking control over it

window.addEventListener("hashchange", handler);
