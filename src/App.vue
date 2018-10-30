<template>
  <div id="app">
    <NavBar v-if="!user.isAdmin"></NavBar>
    <NavBarAdmin v-else></NavBarAdmin>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/oj/NavBar'
import NavBarAdmin from './components/admin/NavBarAdmin'
import {mapGetters} from 'vuex'
export default {
  name: 'App',
  components: {NavBar, NavBarAdmin},
  mounted () {},
  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>