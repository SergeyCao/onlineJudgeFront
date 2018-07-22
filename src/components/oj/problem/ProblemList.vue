<template>
  <div>
    <div v-if="user.isAdmin">
      <router-link :to="{name:'AddProblem'}" style="text-decoration: none;color:white">
        <el-button type="primary" icon="el-icon-edit" style="margin-top: 10px;margin-bottom: 10px;float: left" >添加题目</el-button>
      </router-link>
    </div>
    <el-table
      :data="problems"
      style="width: 100%"
      ref="problems"
      align="left"
      @current-change= "getProblem">
      <el-table-column
        prop="id"
        label="id"
        width="90">
      </el-table-column>
      <el-table-column
        prop="title"
        label="title"
        width="480">
      </el-table-column>
      <el-table-column
        prop="source"
        label="source"
        width="180">
      </el-table-column>
      <el-table-column
        prop="author"
        label="author">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import api from '../api'
import {mapGetters} from 'vuex'

export default {
  name: 'ProblemList',
  data () {
    return {
      problems: []
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.getProblemList()
    },
    getProblemList () {
      api.getProblemList().then(res => {
        this.problems = res.data.data
        this.size = res.data.data.size
      })
    },
    tableRowClassName ({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    },
    getProblem (problem) {
      console.log(problem.problemId)
      this.$router.push('/problem/' + problem.problemId)
    }
  },
  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<style scoped>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
