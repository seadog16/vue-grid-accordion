import Vue from 'vue';
import App from './App.vue';
import ImageGridAccordion from './../packages/index'
Vue.config.productionTip = false;
Vue.use(ImageGridAccordion);
new Vue({
    render: h => h(App),
}).$mount('#app');
