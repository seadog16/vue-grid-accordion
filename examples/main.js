import Vue from 'vue';
import App from './App.vue';
import vGridAccordion from '../packages';
Vue.config.productionTip = false;
Vue.use(vGridAccordion);
new Vue({
    render: h => h(App),
}).$mount('#app');
