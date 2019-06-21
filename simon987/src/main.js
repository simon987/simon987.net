import Vue from 'vue'
import App from './App'
import router from './router'

//TODO: Import individual components
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false;
Vue.use(VueMaterial);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});

