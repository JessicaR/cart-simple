<template>
  <section class="sc-store__section">
    //Stores
    <div class="sc-store__wrapper">
      <p class="sc-store__title">{{store.title}}</p>
      <div class="sc-store__shipping">
        <p>$0</p><div class="sc-store__shipping-slider"></div><p>{{store.threshold}}</p>
        <p>{{shipping.message}}</p>
      </div>
      <a class="sc-store__link" b-bind:href="storeLink">Store Details</a>
    </div>
    <div class="sc-store__product">
      <img class="sc-store__product-img" v-bind:url="imgUrl"/>
      <div class="sc-store__remove-btn"></div>
      <p class="sc-store__product-title">{{product.title}}</p>
      <div class="sc-store__col1">
        <p class="sc-store__product-cb"><span class="rewards"></span></p>
        <div class="sc-store__product-ordered">{{product.ordered}}</div>
      </div>
      <div class="sc-store__col2">
        <div class="sc-store__product-qty">
          <button class="sc-store__qty-up"></button>
          <button class="sc-store__qty-down"></button>
        </div>
        <p class="sc-store__product-was">{{product.originalPrice}}</p>
        <p class="sc-store__product-price">{{product.price}}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CartStores',
};
</script>