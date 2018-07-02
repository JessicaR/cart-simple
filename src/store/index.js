import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './cart/actions.js';
import * as getters from './cart/getters.js';
import profile from './cart/modules/profile.js';
import merchants from './cart/modules/merchants.js';
import products from './cart/modules/products.js';
import promotions from './cart/modules/promotions.js';
import cart from './cart/modules/cart.js';

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    profile,
    merchants,
    products,
    promotions,
    cart
  },
  strict: debug
})
