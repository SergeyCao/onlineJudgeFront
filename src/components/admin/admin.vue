<template>
    <div v-if="user.isAdmin === 1" style="margin-top:10px">
      <el-row :gutter="20">
        <el-col :span="6">      
          <router-link :to="{name:'AddAnnouncement'}" style="text-decoration: none;">
            <el-button type="primary" icon="el-icon-edit" style="width: 90%; margin: 5px auto 0 auto " >添加公告</el-button>
          </router-link>
        </el-col>
        <el-col :span="6">
          <router-link :to="{name:'AddProblem'}" style="text-decoration: none;">
            <el-button type="success" icon="el-icon-edit" style="width: 90%; margin: 5px auto 0 auto" >添加题目</el-button>
          </router-link>          
        </el-col> 
        <el-col :span="6">
          <router-link :to="{name:'AddProblem'}" style="text-decoration: none;">
            <el-button type="danger" icon="el-icon-edit" style="width: 90%; margin: 5px auto 0 auto" >添加比赛</el-button>
          </router-link> 
        </el-col>
        <el-col :span="6">
          <router-link :to="{name:'AddProblem'}" style="text-decoration: none;">
            <el-button type="warning" icon="el-icon-edit" style="width: 90%; margin: 5px auto 0 auto" >查看题目数据</el-button>
          </router-link> 
        </el-col>
      </el-row>


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

<style scoped lang="stylus">
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
