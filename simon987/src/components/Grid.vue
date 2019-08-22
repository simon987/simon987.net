<template>
    <div>
        <div id="grid"></div>
        <Jumbotron />
    </div>
</template>

<script>
import Grid from '../Grid';
import Jumbotron from "./Jumbotron";

let themes = [
    {
        c1: 0xf9989f,
        c2: 0xfccb8f,
        c3: 0xc5f8c8
    },
    {
        c1: 0x547d59,
        c2: 0xa0b97b,
        c3: 0xbdc17c
    },
    {
        c1: 0xd9bf68,
        c2: 0xe05b7c,
        c3: 0x811143
    },
    {
        c1: 0x70ce9a,
        c2: 0xf2f1c7,
        c3: 0xc15b41
    },
    {
        c1: 0xEAEBD7,
        c2: 0x74645F,
        c3: 0xF3876A
    },
    {
        c1: 0xADBCB9,
        c2: 0xC184E9,
        c3: 0xD8C5C3
    },
    {
        c1: 0xFA520B,
        c2: 0xFCB20C,
        c3: 0xE5E113
    },
    {
        c1: 0xF97F0D,
        c2: 0xFE0B98,
        c3: 0x2AADD4
    },
];

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
            themes
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
