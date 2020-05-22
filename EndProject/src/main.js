import auth from './auth'
import App from './App.vue'

let access_token = ''
let user_id = ''

if (sessionStorage.getItem('key_requested') === null){
    auth.requireToken();
} else {
    let result = auth.parse_url();
    access_token = result[0]
    user_id = result[1]

}

new Vue({
    render: h => h(App),
}).$mount('#app')