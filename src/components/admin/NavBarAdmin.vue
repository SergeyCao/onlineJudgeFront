<template>
  <div id="Navbar">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="changeRouter">
      <el-menu-item index="/" class="logo">OnlineJudge</el-menu-item>
      <el-menu-item index="/problems">
        <i class="el-icon-tickets"></i>
        Problem
      </el-menu-item>
      <el-menu-item index="/contests">Contests</el-menu-item>
      <el-menu-item index="/status">Status</el-menu-item>
      <el-menu-item index="/rank">Rank</el-menu-item>
      <el-menu-item index="/blog">Blog</el-menu-item>
      <el-menu-item index="/about">About</el-menu-item>
      <el-menu-item index="/admin">Admin</el-menu-item>
      <div v-if="!isSignIn">
        <el-button type="primary" style="float: right;margin-top: 8px" @click="signIn">Sign in</el-button>
      </div>
      <div v-else>
        <!--profile  -->
        <el-dropdown size="medium" split-button type="primary" style="float: right;margin-top: 8px">
          {{user.username}}
          <el-dropdown-menu slot="dropdown">
            <span @click="toProfile"><el-dropdown-item>个人主页</el-dropdown-item></span>
            <el-dropdown-item>提交记录</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <div @click="signOut" ><el-dropdown-item divided>登出</el-dropdown-item></div>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-menu>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'NavBarAdmin',
  data () {
    return {
      activeIndex: '1'
    }
  },
  mounted () {
    this.getProfile()
  },
  methods: {
    ...mapActions(['getProfile']),
    toProfile () {
      this.$router.push('/user/profile')
    },
    signIn () {
      this.$router.push('/user/signin')
    },
    changeRouter (key) {
      this.$router.push(key)
    },
    signOut () {
      this.$store.commit('setProfile', null)
    }
  },
  computed: {
    ...mapGetters(['isSignIn', 'user'])
  }
}
</script>

<style scoped>
  #header {
    min-width: 1100px;
    position: fixed;
    top: 0;
    left: 0;
    height: 60px;
    width: 100%;
    z-index: 1000;
    background-color: #fff;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
  }
  .logo {
    margin-left: 2%;
    margin-right: 2%;
    font-size: 20px;
    float: left;
    line-height: 60px;
  }

</style>
