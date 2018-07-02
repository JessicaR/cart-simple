<template>
  <section class="sc-merchant__section">
    //Merchants
    <div class="sc-merchant__wrapper">
      <p class="sc-merchant__title">{{merchant.title}}</p>
      <div class="sc-merchant__shipping">
        <Graph :value="shippingValue" v-bind:progress="progress" v-bind:shipping-data="shipping"></graph>
        <p>{{shipping.message}}</p>
      </div>
      <a class="sc-merchant__link" b-bind:href="merchantLink">merchant Details</a>
    </div>

  <CartItem
  v-for="item in items"
      :item="item"
      :key="item.id" />

  </section>
</template>

<script>
import Graph from "./graph.js";
import CartItem from "./CartItem.vue";
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'CartMerchants',
  computed: mapGetters ({
    merchants: 'cartMerchants'
  }),
  components:{
    Graph,
    CartItem
  },
  ...mapGetters([
    'title',
    'shipping',
    'total'
    ]),
  ...mapState({

  }),
  totalWithDiscount () {
    let total = this.$store.getters.total
    return total > 0 ? this.total : 0
  }
};
</script>