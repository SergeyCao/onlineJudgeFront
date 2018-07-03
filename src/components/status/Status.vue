<template>
  <el-table
    :data="submissions"
    style="width: 100%">
    <el-table-column
      prop="id"
      label="id"
      width="180">
    </el-table-column>
    <el-table-column
      prop="userId"
      label="userId"
      width="180">
    </el-table-column>
    <el-table-column
      prop="result"
      label="result"
      width="180">
    </el-table-column>
    <el-table-column
      prop="time"
      label="time">
    </el-table-column>
  </el-table>
</template>

<script>
import api from '../api'

export default {
  name: 'Status',
  data () {
    return {
      submissions: []
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.getSubmissions()
    },
    getSubmissions () {
      api.getSubmissions().then(res => {
        console.log(res)
        this.submissions = res.data.data
      })
    }
  }

}
</script>

<style scoped>

</style>
