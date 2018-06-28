<template>
<section class="sc-list__section">
  //Lists
  <p class="sc-list__title">Your Recent Lists</p>
  <ul class="sc-list__wrapper">
    <li class="sc-list__item">
      <img class="sc-list__img" v-bind:url="imgUrl"/>
      <p class="sc-list__title">{{list.title}}</p>
      <p class="sc-list__rewards">{{list.cb}}</p>
    </li>
  </ul>
</section>
</template>

<script>
export default {
  name: 'CartLists',
};
</script>
