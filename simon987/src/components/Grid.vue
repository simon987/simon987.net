<template>
    <div>
        <div id="grid"></div>
        <Jumbotron />
    </div>
</template>

<script>
import Grid from '../Grid';
import Jumbotron from "./Jumbotron";

let lightTheme = {
    c1: 0xf9989f,
    c2: 0xfccb8f,
    c3: 0xc5f8c8
};

let darkTheme = {
    c1: 0x3a3b52,
    c2: 0x33284b,
    c3: 0x2c2332
};

const urlParams = new URLSearchParams(window.location.search);
const size = urlParams.get('size');

export default {
    name: 'Grid',
    components: {Jumbotron},
    data() {
        return {}
    },
    mounted() {
        let grid = new Grid(
            size ? size : window.innerWidth < 1000 ? 15 : 25,
            window.innerWidth < 1000 ? 80 : 40,
            // darkTheme
            lightTheme
        );
        grid.setup();
        grid.resize();
    }
}
</script>

<style scoped>
    #grid {
        position: fixed;
        background: white;
    }
</style>
