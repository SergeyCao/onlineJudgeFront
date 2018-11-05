<template>
    <div v-if="user.isAdmin === 1">
      <router-link :to="{name:'AddProblem'}" style="text-decoration: none;">
        <el-button type="primary" icon="el-icon-edit" style="width: 90%; margin: 5px auto 0 auto" >添加题目</el-button>
      </router-link>
    </div>
</template>

<script>
import api from '../oj/api'
import {mapGetters} from 'vuex'

export default {
  name: 'admin',
  data () {
    return {
      announcements: []
    }
  },
  mounted () {

  },
  methods: {
 
  },
  computed: {
    ...mapGetters(['user','isSignIn'])
  }
}
</script>

<style scoped>

</style>
