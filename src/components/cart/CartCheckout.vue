<template>
<section class="sc-checkout__section">
  //Checkout
  <button class="sc-checkout__express-btn">Express Pay</button>
  <button class="sc-checkout__checkout-btn">Checkout</button>
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
export default {
  name: 'CartCheckout',
};
</script>