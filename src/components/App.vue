<template> 
<section>
<header>Here is a header.</header> 
  <StickyCart />
<footer>Here is a footer.</footer>
</section>
</template>

<script>
import StickyCart from './layout/StickyCart.vue';
export default {
  name: 'App',
  components: {
    StickyCart,
  },
};
</script>