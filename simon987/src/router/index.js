import Vue from 'vue'
import Router from 'vue-router'
import Grid from '../components/Grid'
import Jumbotron from "../components/Jumbotron";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Grid',
            component: Grid
        },
        {
            path: '/j',
            name: 'Jumbotron',
            component: Jumbotron
        }
    ]
})
