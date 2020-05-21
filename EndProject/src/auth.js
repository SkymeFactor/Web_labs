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
        //this.url = init.redirectURI + '#access_token=2348c995ff33a38390d5fe6d7ccd7d1a575252a6e902a36e8b689bfc22fd3f76d89304211d7763bb72228&expires_in=86400&user_id=163781571&state=123456'
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

//https://oauth.vk.com/authorize?client_id=5490057&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=friends&response_type=token&v=5.52

/*let url = init.authLink + '?client_id=' + init.clientId
url += '&display=' + init.displayType
url += '&' + init.redirectURI
url += '&scope=' + init.scope
url += '&response_type' + init.responseType*/


//'https://oauth.vk.com/authorize?client_id=163781571&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=photos&response_type=token'


