<template>
  <nav class="navbar navbar-light bg-faded" v-if="profile.limit">
    <div class="container">
      <a class="navbar-brand" href="/">Shop</a>

      <span class="navbar-text float-xs-right">
        Hello <strong>{{fullName}}</strong>, your credit limit is
         <CartLimit :limit="profile.limit" />
      </span>
    </div>
  </nav>
</template>

<script>
import CartLimit from './../cart/CartLimit.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'PageHeader',
  computed: {
      ...mapState({
      profile: state => state.profile.data
    }),
    fullName () {
      return `${this.profile.firstName} ${this.profile.lastName}`
    }
  },
  methods: mapActions([
    'getProfile'
  ]),
  components: { CartLimit },
  created () {
    this.getProfile()
  }
}
</script>