<template>
<section class="sc-summary__section">
  <p class="sc-summary__savings"></p>
  <p class="sc-summary__subtotal"></p>
  <ul class="list-group">
    <li class="list-group-item">
      Subtotal ({{itemsQuantity}} {{'item' | pluralize(itemsQuantity) }}): {{subtotal | formatMoney}}
      <em v-if="productDiscount"><b> (30% OFF applied)</b></em>
    </li>

    <li class="list-group-item">
      Shipping:
      <span v-if="!freeShipping"> {{shipping | formatMoney}}</span>
      <em v-if="freeShipping"> Free Shipping</em>
    </li>

    <li class="list-group-item">Taxes: {{taxes | formatMoney}}</li>
    <li class="list-group-item">
      <strong>Total:</strong>
      <strong v-if="!totalDiscount"> {{total | formatMoney}}</strong>
      <span v-if="totalDiscount">
        <strike> {{total + 100 | formatMoney}}</strike>
        <strong> {{totalWithDiscount | formatMoney}}</strong>
      </span>
    </li>
  </ul>
  </section>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'CartSummary',
  computed: {
    ...mapGetters([
      'itemsQuantity',
      'subtotal',
      'taxes',
      'shipping',
      'total'
    ]),
    ...mapState({
      productDiscount: state => state.cart.productDiscount,
      freeShipping: state => state.cart.freeShipping,
      totalDiscount: state => state.cart.totalDiscount
    }),
    totalWithDiscount () {
      let total = this.$store.getters.total
      return total > 0 ? this.total : 0
    }
  }
}
</script>

