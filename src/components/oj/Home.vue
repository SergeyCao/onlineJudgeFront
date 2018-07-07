<template>
    <el-table
      :data="announcements"
      style="width: 100%"
      :row-class-name="tableRowClassName"
      align="left">
      <el-table-column
        prop="title"
        label="title"
        width="800">
      </el-table-column>
      <el-table-column
        prop="date"
        label="date"
        width="180">
      </el-table-column>
      <el-table-column
        prop="author"
        label="author">
      </el-table-column>
    </el-table>
</template>

<script>
import api from './api'
export default {
  name: 'home',
  data () {
    return {
      announcements: []
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.getAnnouncements()
    },
    getAnnouncements () {
      api.getAnnouncementList().then(res => {
        console.log(res)
        if (res.data.code === 1) {
          this.announcements = res.data.data
          this.size = res.data.data.size
        }
      })
    },
    tableRowClassName ({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    }
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
