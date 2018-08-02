<template>
  <div id="Navbar">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="changeRouter">
      <el-menu-item index="/" class="logo">OnlineJudge</el-menu-item>
      <el-menu-item index="/problems">
        <i class="el-icon-tickets"></i>
        Problem
      </el-menu-item>
      <el-menu-item index="/contests">
        <i class="el-icon-edit"></i>
        Contests
      </el-menu-item>
      <el-menu-item index="/status">
        <i class="el-icon-menu"></i>
        Status
      </el-menu-item>
      <el-menu-item index="/rank">
        <i class="el-icon-sort"></i>
        Rank
      </el-menu-item>
      <el-menu-item index="/blog">
        <i class="el-icon-document"></i>
        Blog
      </el-menu-item>
      <el-menu-item index="/about">
        <i class="el-icon-share"></i>
        About
      </el-menu-item>
      <el-menu-item index="/admin">
        <i class="el-icon-service"></i>
        Admin
      </el-menu-item>
      <div v-if="isSignIn === false">
        <el-button type="primary" style="float: right;margin-top: 8px" @click="signIn">Sign in</el-button>
      </div>
      <div v-else>
        <!--profile  -->
        <el-dropdown size="medium" split-button type="primary" style="float: right;margin: 9px">
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
    getCookie (name) {
      let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
      let arr = document.cookie.match(reg)
      if (arr) {
        return arr[2]
      } else {
        return null
      }
    },
    signOut () {
      this.$store.commit('setProfile', null)
      console.log(this.getCookie('token'))
      let myDate = new Date()
      myDate.setTime(-1000)// 设置时间
      let data = document.cookie
      console.log(data)
      let dataArray = data.split('; ')
      for (let i = 0; i < dataArray.length; i++) {
        let varName = dataArray[i].split('=')
        document.cookie = varName[0] + '=\'\'; expires=' + myDate.toGMTString()
      }
    }
  },
  computed: {
    ...mapGetters(['isSignIn', 'user'])
  }
}
</script>

<style scoped lang="stylus">
  .logo
    margin 0 2%
    font-size: 20px
    float: left
    line-height: 60px
  .el-menu--horizontal>.el-menu-item:hover
    color cornflowerblue
    transform rotate(360deg)
    background-color lightgrey
    transition all 0.8s ease-in-out
  .el-button--primary:hover
    background-color coral
    border-color coral
    transition all 0.5s ease-in-out
</style>
