<template>
<section class="sc-checkout__section">
  //Checkout
  <button class="sc-checkout__express-btn"
    :disabled="orderOnLimit"
        @click="buy">Express Pay</button>
  <button class="sc-checkout__checkout-btn"
    :disabled="orderOnLimit"
        @click="buy">Checkout</button>
         <p v-if="orderOnLimit">Order is over limit.</p>

  <a href="/nbts/cart.xhtml">Save for Later/ Checkout Options</a>
  <div class="sc-checkout__options-wrapper">
    <img class="sc-checkout__options-img"/>
    <img class="sc-checkout__options-img"/>
    <img class="sc-checkout__options-img"/>
    <img class="sc-checkout__options-img"/>
  </div>
</section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CartCheckout',
   computed: mapGetters({
    orderOnLimit: 'orderOnLimit'
  }),
  methods: {
    buy () {
      window.alert('You bought :)')
      window.location.reload()
    }
  }
};
</script>