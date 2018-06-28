<template>
<aside class="js-cart">
  <CartHeader />
  <CartMessages />
  <CartStores />
  <CartSummary />
  <CartCheckout />
  <CartLists />
</aside>
</template>

<script>
import CartHeader from '../cart/CartHeader.vue';
import CartMessages from '../cart/CartMessages.vue';
import CartStores from '../cart/CartStores.vue';
import CartSummary from '../cart/CartSummary.vue';
import CartCheckout from '../cart/CartCheckout.vue';
import CartLists from '../cart/CartLists.vue';

export default {
  name: 'StickyCart',
  components: {
    CartHeader,
    CartMessages,
    CartStores,
    CartSummary,
    CartCheckout,
    CartLists,
  },
};
</script>