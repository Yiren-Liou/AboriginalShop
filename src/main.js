import { createApp } from 'vue';
import 'bootstrap';
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueSweetalert2 from 'vue-sweetalert2';
import VueLoading from 'vue-loading-overlay';
import AOS from 'aos';
import 'aos/dist/aos.css';
import toCurrency from './methods/toCurrency';
import { toDate, toUnix } from './methods/toDate';
import collapseNav from './methods/collapseNav';
import App from './App.vue';
import router from './router';

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');

AOS.init({
  duration: 1500,
  once: true,
});

const app = createApp(App);
app.config.globalProperties.$toCurrency = toCurrency;
app.config.globalProperties.$date = {
  toDate,
  toUnix,
};
app.config.globalProperties.$collapseNav = collapseNav;
app.use(router);
app.use(VueAxios, axios);
app.use(VueSweetalert2);
app.use(VueLoading);
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.component('Loading', VueLoading);
app.mount('#app');
