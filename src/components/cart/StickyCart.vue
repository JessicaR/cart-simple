<template>
<aside class="js-cart">
  <CartHeader />
  <CartMessages />
  <CartMerchants 
    v-for="merchant in merchants"
        :merchant="merchant"
        :key="merchant.id" />
  <CartSummary />
  <CartCheckout />
  <CartLists />
</aside>
</template>

<script>
import CartHeader from './CartHeader.vue';
import CartMessages from './CartMessages.vue';
import CartMerchants from './CartMerchants.vue';
import CartSummary from './CartSummary.vue';
import CartCheckout from './CartCheckout.vue';
import CartLists from './CartLists.vue';

import { mapGetters } from 'vuex'

export default {
  name: 'StickyCart',
  computed: mapGetters({
    merchants: 'cartMerchants'
  }),
  components: {
    CartHeader,
    CartMessages,
    CartMerchants,
    CartSummary,
    CartCheckout,
    CartLists,
  }
};
</script>