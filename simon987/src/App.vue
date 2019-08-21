<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

export default {
    name: 'App'
}
</script>

<style>
    body {
        margin: 0;
        padding: 0;
    }

    html {
        overflow-x: hidden;
        margin: 0;
        padding: 0;
    }
</style>
