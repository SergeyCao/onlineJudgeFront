<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1" class="logo">OnlineJudge</el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-tickets"></i>
      Problem
    </el-menu-item>
    <el-menu-item index="3">Contests</el-menu-item>
    <el-menu-item index="4">Status</el-menu-item>
    <el-menu-item index="5">Rank</el-menu-item>
    <el-menu-item index="6">Blog</el-menu-item>
    <div v-if="!isSignIn">
      <el-button type="primary" style="float: right;margin-top: 8px">Sign in</el-button>
    </div>
  </el-menu>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>
  .logo {
    margin-left: 2%;
    margin-right: 2%;
    font-size: 20px;
    float: left;
    line-height: 60px;
  }
</style>
