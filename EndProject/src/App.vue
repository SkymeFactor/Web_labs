<template>
    <h1>
        <a :herf="getId">See {{app.username}}  at VK.com</a>
    </h1>
</template>

<script>
export default {
    getId() {
        if (!app.user_id){
            return
        }
        return 'https://vk.com/id' + app.user_id
    }
}
</script>