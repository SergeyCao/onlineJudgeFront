<template>
    <el-table
      :data="announcements"
      style="width: 90%; margin: 10px auto; border-radius: 5px"
      type="selection"
      :row-class-name="tableRowClassName"
      @row-click="click"
      align="left"
      >
      <el-table-column
        prop="title"
        label="title"
        width="700">
      </el-table-column>
      <el-table-column
        prop="date"
        label="date"
        width="200">
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
    click (row, event, column) {
      this.$alert(row.content, row.title, {
          confirmButtonText: '确定'
        });
    },
    init () {
      this.getAnnouncements()
    },
    getAnnouncements () {
      api.getAnnouncementList().then(res => {
        console.log('announcements:' + res.data)
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

<style scoped lang="stylus">
  .el-table .warning-row
    background: oldlace
  .el-table .success-row
    background: #f0f9eb
</style>
