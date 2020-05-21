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

/*import Vue from "vue";
App = require("./App.vue");

function drawPics(pics) {
    html = ''
    for (pic in pics){
        var t = pics[pic]
        html +=
            '<li>'
            +'<a href="https://vk.com/id163781571">'
                +'<img src="' + t + '" style="width: 100px"/>'
            +'</a>'
    }
    $('#div_id').html(html)
}*/


var app = new Vue({
    el: '#app',
    data: {
        url: "http://api.vk.com/method/photos.getAll?owner_id=",
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
    }
})

/*

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount("#app");*/

/*
var app = new Vue({
    el: '#app',
    data: {
        product: "VK Gallery"
    }
})*/


/*var app = new Vue({
    el: '#app',
    data: {
      access_token: "2348c995ff33a38390d5fe6d7ccd7d1a575252a6e902a36e8b689bfc22fd3f76d89304211d7763bb72228",
      url: "http://api.vk.com/method/photos.getAll?owner_id=163781571",
      username: "",
      user_id: "",
      grams: [],
      next_url: "",
      error: false,
      count: 0
    },
    render: function(h) {*/
        /*html='<ul>'
        console.log(this.grams)
        for (pic in this.grams){
            var t = this.grams[pic]
            html +=
                '<li>'
                +'<a href="https://vk.com/id163781571">'
                    +'<img src="' + t + '" style="width: 100px"/>'
                +'</a>'
        }
        html += '</ul>'
        console.log(html)*/
        //$('#div_id').html(html)
        /*return h(App)/*h('h1', [h('a', {
                attrs: {
                    href: 'https://vk.com/id' + this.user_id,
                }
            }, 'See ' + this.username + '  at VK.com')])*/
    /*},
    computed: {
        instapage() {
            return 'https://vk.com/id' + this.user_id
        }
    },
    methods: {
        getGrams() {
            $.ajax ({
            url: this.url + "&access_token=" + this.access_token + "&v=5.103",
            method: 'GET',
            dataType: 'JSONP',
            success: function(data) {
                console.log(data)
                if (Vue.grams === undefined) {
                    Vue.grams = []
                }
                for (elem in data.response.items){
                    Vue.grams.push(data.response.items[elem].sizes[data.response.items[elem].sizes.length - 1].url)
                };
                for(i in this.grams){
                    render('img', {
                        attrs: {
                            src: require(this.grams[i]),
                            alt: this.grams[i]
                        }
                    })
                }
                //render()
                //drawPics(Vue.grams)
                //console.log(Vue.grams)
            }
        })*/
        /*axios.get(this.url + "&access_token=" + this.access_token + "&v=5.103")
          .then(({data}) => {
              console.log(data)
            this.grams = data.data
            this.username = data.data[0].user.username
            this.next_url = data.pagination.next_url
          })
          .catch(function (error) {
            console.log(error)
            this.error = true
          });*/
      /*},
      getMoreGrams(){
        axios.get(this.next_url)
          .then(({data}) => {
            this.grams = this.grams.concat(data.data)
            this.next_url = data.pagination.next_url
          })
          .catch(function (error) {
            console.log(error)
            this.error = true
          });
      }
    },
    created() {
        $.ajax ({
            url: "https://api.vk.com/method/users.get?user_ids=163781571&access_token=" + this.access_token + "&v=5.103",
            method: 'GET',
            dataType: 'JSONP',
            success: function (data) {
                Vue.set(app, "username", data.response[0].first_name + ' ' + data.response[0].last_name)
                Vue.set(app, "user_id", data.response[0].id)
                //this.render
            }
        })
        this.getGrams();
    }
})*/