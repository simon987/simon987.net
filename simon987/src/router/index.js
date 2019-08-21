import Vue from 'vue'
import Router from 'vue-router'
import Grid from '../components/Grid'
import Code from "../components/Code";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Grid',
            component: Grid
        },
        {
            path: '/code',
            name: 'Code',
            component: Code
        }
    ]
})
