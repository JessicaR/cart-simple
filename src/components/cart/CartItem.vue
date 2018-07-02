<template>
<div class="sc-merchant__product">
      <img class="sc-merchant__product-img" v-bind:url="imgUrl"/>
      <RemoveFromCart :item="item" />
      
      <p class="sc-merchant__product-title">{{item.title}}</p>
      <div class="sc-merchant__col1">
        <p class="sc-merchant__product-cb"><span class="rewards"></span></p>
        <div class="sc-merchant__product-ordered">{{item.ordered}}</div>
      </div>
      <div class="sc-merchant__col2">
        <div class="sc-merchant__product-qty">
          <button class="sc-merchant__qty-up">{{item.quantity}} - {{item.price | formatMoney}}</button>
          <button class="sc-merchant__qty-down"></button>
        </div>
        <p class="sc-merchant__product-was">{{item.originalPrice}}</p>
        <p class="sc-merchant__product-price">{{item.price}}</p>
      </div>
</div>
</template>

<script>
import RemoveFromCart from './../products/RemoveFromCart.vue'

export default {
 name: "CartItem",
   props: {
    item: Object
  },
  components: { RemoveFromCart }
}
</script>