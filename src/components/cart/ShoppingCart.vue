<template>
  <div>
    <h3>Cart</h3>

    <ShoppingCartSummary />

    <div class="mt-1 text-xs-center">
      <button class="btn btn-success"
        :disabled="orderOnLimit"
        @click="buy">
        Checkout
      </button>
      <p v-if="orderOnLimit">Order is over limit.</p>
    </div>
  </div>
</template>

<script>
import CartSummary from './CartSummary'
import { mapGetters } from 'vuex'

export default {
  name: 'Cart',
  computed: mapGetters({
    items: 'cartProducts',
    orderOnLimit: 'orderOnLimit'
  }),
  components: {
    ShoppingCartItem,
    ShoppingCartSummary
  },
  methods: {
    buy () {
      window.alert('You bought :)')
      window.location.reload()
    }
  }
}
</script>