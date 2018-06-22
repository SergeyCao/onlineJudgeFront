<template>
    <el-table
      :data="problems"
      style="width: 100%"
      :row-class-name="tableRowClassName">
      <el-table-column
        prop="title"
        label="title"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="date"
        width="180">
      </el-table-column>
      <el-table-column
        prop="writer"
        label="writer">
      </el-table-column>
    </el-table>
</template>

<script>
import api from '../api'

export default {
  name: 'ProblemList',
  data () {
    return {
      problems: [
        {
          'title': '111',
          'date': '2018-5-21',
          'writer': 'mas-'
        },
        {
          'title': '111',
          'date': '2018-5-21',
          'writer': 'mas-'
        },
        {
          'title': '111',
          'date': '2018-5-21',
          'writer': 'mas-'
        },
        {
          'title': '111',
          'date': '2018-5-21',
          'writer': 'mas-'
        }
      ]
    }
  },
  mounted () {
    // this.init()
  },
  methods: {
    init () {
      this.getProblemList()
    },
    getProblemList () {
      api.getProblemList().then(res => {
        this.problems = res.data.data.results
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
