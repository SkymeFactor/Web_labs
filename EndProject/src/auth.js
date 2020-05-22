const auth = {
    requireToken() {
        const init = {
            authLink: 'https://oauth.vk.com/authorize',
            clientId: '7475134',
            displayType: 'page',
            scope: 'photos',
            redirectURI: 'https://skymefactor.github.io/Web_labs/EndProject/index.html',//'file:///home/skyme/Documents/Web_labs/EndProject/index.html',
            responseType: 'token',
            v: 'v=5.52'
        }
        let url = init.authLink + '?client_id=' + init.clientId
        url += '&display=' + init.displayType
        url += '&redirect_uri=' + init.redirectURI
        url += '&scope=' + init.scope
        url += '&response_type=' + init.responseType
        url += '&v=' + init.v
        console.log(url)
        sessionStorage.setItem('key_requested', true)
        window.location = url
    },
    parse_url() {
        const result_url = window.location.href.toString();
        console.log(result_url)
        const hashURL = result_url.split('#')[1];
        let result = []
        result.push(hashURL.split('=')[1].split('&')[0])
        console.log(hashURL)
        result.push(hashURL.split('&')[2].split('=')[1])
        console.log(result[0])
        console.log(result[1])

        return result
    }
}

export default auth
