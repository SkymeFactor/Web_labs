import auth from './auth'

let access_token = ''
let user_id = ''

if (sessionStorage.getItem('key_requested') === null){
    auth.requireToken();
} else {
    let result = auth.parse_url();
    access_token = result[0]
    user_id = result[1]

}


var app = new Vue({
    el: '#app',
    data: {
        url: "https://api.vk.com/method/photos.getAll?owner_id=",
        text: '',
        access_token: access_token,//"2348c995ff33a38390d5fe6d7ccd7d1a575252a6e902a36e8b689bfc22fd3f76d89304211d7763bb72228",
        username: "",
        user_id: user_id,
        photos: [],
        //next_url: "",
        error: false,
    },
    computed: {
        getPage() {
            return 'https://vk.com/id' + this.user_id
        }
    },
    methods: {
        getPhotos(offset) {
            $.ajax ({
                url: this.url + this.user_id + "&offset=" + offset + "&access_token=" + this.access_token + "&v=5.103",
                method: 'GET',
                dataType: 'JSONP',
                success: function(data) {
                    if (app.photos === undefined) {
                        app.photos = []
                    }
                    for (let elem in data.response.items){
                        app.photos.push(data.response.items[elem].sizes[data.response.items[elem].sizes.length - 1].url)
                    };
                }
            })
        },
    },
    created() {
        $.ajax ({
            url: "https://api.vk.com/method/users.get?user_ids=" + this.user_id + "&access_token=" + this.access_token + "&v=5.103",
            method: 'GET',
            dataType: 'JSONP',
            success: function (data) {
                app.username = data.response[0].first_name + ' ' + data.response[0].last_name
                //app.user_id = data.response[0].id
            }
        })
        this.getPhotos(0)
    },
    beforeDestroy() {
        for (var it in $.cookie()) $.removeCookie(it);
    }
})

