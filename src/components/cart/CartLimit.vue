<template>
  <strong>{{limit | formatMoney}}</strong>
</template>

<script>
export default {
  name: 'CartLimit',
  props: {
    limit: Number
  }
}
</script>