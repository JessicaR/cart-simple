import Vue from 'vue';
import accounting from 'accounting'
import pluralize from 'pluralize'
import Main from './components/Main.vue';
import store from './store';

Vue.config.productionTip = false;

Vue.filter('formatMoney', accounting.formatMoney)
Vue.filter('pluralize', pluralize)

new Vue({
  el: '#main',
  store,
  render: h => h(Main)
});

