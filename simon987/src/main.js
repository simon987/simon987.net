import Vue from 'vue'
import App from './App'
import router from './router'

//TODO: Import individual components
import VueMaterial from 'vue-material'

Vue.config.productionTip = false;
Vue.use(VueMaterial);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});

