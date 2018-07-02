<template> 
<section>
  <Header />
  <StickyCart />
  <Header />
</section>
</template>

<script>
import Header from './shared/Header.vue';
import Footer from './shared/Footer.vue';
import StickyCart from './cart/StickyCart.vue';
export default {
  name: 'Main',
  components: {
    StickyCart,
  },
};
</script>