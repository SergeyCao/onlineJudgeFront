<template>
  <el-table
    :data="submissions"
    style="width: 100%;"
    align="left">
    <el-table-column
      prop="date"
      label="date"
      :formatter="dateFormat"
      width="180">
    </el-table-column>
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
    <el-table-column
      prop="memory"
      label="memory">
    </el-table-column>
    <el-table-column
      prop="language"
      label="language">
    </el-table-column>
  </el-table>
</template>

<script>
import api from '../api'
import moment from 'moment'
import {JUDGE_STATUS} from '../../util/constants'

export default {
  name: 'Status',
  data () {
    return {
      submissions: [],
      judge_status: JUDGE_STATUS
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
        this.submissions = res.data.data
        console.log(this.submissions)
      })
    },
    dateFormat: function (row, column) {
      let date = row[column.property]
      if (date === undefined) {
        return ''
      }
      return moment(date).format('YYYY-MM-DD HH:mm:ss')
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
