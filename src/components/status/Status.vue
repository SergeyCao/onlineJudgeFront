<template>
  <el-table
    :data="submissions"
    style="width: 100%;">
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
      <template slot-scope="scope">
        <el-tag size="medium" :color=judge_status[scope.row.result].color>{{ judge_status[scope.row.result].name }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column
      prop="time"
      label="time">
    </el-table-column>
  </el-table>
</template>

<script>
import api from '../api'
import {JUDGE_STATUS} from '../../util/constants'

export default {
  name: 'Status',
  data () {
    return {
      submissions: [],
      judge_status : JUDGE_STATUS

    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.getSubmissions()
    },
    test ({row, column, rowIndex, columnIndex}) {
      if (columnIndex === 2) {
        let style = 'color: ' + JUDGE_STATUS[row.result].color + ';'
        row.result = JUDGE_STATUS[row.result].name
        console.log(style)
        return style
      }
      return ''
    },
    getSubmissions () {
      api.getSubmissions().then(res => {
        this.submissions = res.data.data
      })
    }
  }

}
</script>

<style>
  .el-table .accepted {
    background: oldlace;
  }
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
