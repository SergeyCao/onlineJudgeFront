<template>
  <div>
    hello,{{user}}
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Profile',
  computed: {
    ...mapGetters(['isSignIn', 'user'])
  }
}
</script>

<style scoped>

</style>
