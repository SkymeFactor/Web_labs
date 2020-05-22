<template>
    <div id="app">
        <h1><a :href="getPage">See {{ username }} at VK.com</a></h1>
        <div v-if="photos.length > 0">
            <div v-for="photo in photos" :key="photo">
                <a :href="photo">
                    <img :src="photo" :alt="photo"/>
                </a>
            </div>
        </div>
        <div v-else class="loading"></div>
        <div v-if="error" class="error">Sorry, photos from your profile couldn't be fetched.</div>
        <button @click="getPhotos(photos.length)">Load More</button>
    </div>
</template>

<script>
export default {
    name: 'app',
    data: {
        url: "https://api.vk.com/method/photos.getAll?owner_id=",
        text: '',
        access_token: access_token,
        username: "",
        user_id: user_id,
        photos: [],
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
            }
        })
        this.getPhotos(0)
    },
    beforeRouterLeave(to, from, next) {
        const answer = window.confirm('Вы хотите уйти? У вас есть несохранённые изменения!')
        if (answer) {
            next()
        } else {
            next(false)
        }
        setCookie('remixsid', "", {
            'max-age': -1
        })
        setCookie('remixlang', "", {
            'max-age': -1
        })
        setCookie('reminIhk', "", {
            'max-age': -1
        })
    }
}
</script>

<style>
#app {
    background-color: #252526;
    border-left: solid 5px #41b883;
    border-right: solid 5px #41b883;
}
</style>
