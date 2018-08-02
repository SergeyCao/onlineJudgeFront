<template>
  <div>
    <el-table
      :data="submissions"
      style="width: 90%; height: 790px;margin: 10px auto;"
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
        prop="username"
        label="username"
        width="180">
      </el-table-column>
      <el-table-column
        prop="result"
        label="result"
        width="180">
        <template slot-scope="scope">
          <el-tag size="medium"
                  :color=judge_status[scope.row.result].color style="color: black">{{ judge_status[scope.row.result].name }}</el-tag>
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
        <template slot-scope="scope">
          <div v-if="scope.row.username===user.username"
               @click="getCode(scope.row.id)"><a href="javascript:void(0)" style=" text-decoration:none;">{{language[scope.row.language]}}</a></div>
          <div v-else>{{language[scope.row.language]}}</div>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @current-change="handleCurrentChange"
        layout="prev, pager, next"
        :page-size="14"
        :total="totalSize">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import api from '../api'
import moment from 'moment'
import {JUDGE_STATUS, LANGUAGE} from '../../../util/constants'
import {mapGetters} from 'vuex'

export default {
  name: 'Status',
  data () {
    return {
      preSubmissions: [],
      submissions: [],
      judge_status: JUDGE_STATUS,
      language: LANGUAGE,
      totalSize: 0,
      pages: 0
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.getSubmissions()
    },
    getCode (id) {
      this.$router.push('/submission/' + id)
    },
    getSubmissions () {
      api.getSubmissions().then(res => {
        this.totalSize = Number(res.data.data.length)
        this.preSubmissions = res.data.data
        this.submissions = this.preSubmissions
      })
    },
    dateFormat: function (row, column) {
      let date = row[column.property]
      if (date === undefined) {
        return ''
      }
      return moment(date).format('YYYY-MM-DD HH:mm:ss')
    },
    handleCurrentChange (val) {
      let number = 0
      if (val - 2 < 0) {
        number = 0
      } else {
        number = val - 2
      }
      this.submissions = this.preSubmissions
      if (val !== 1) {
        setTimeout(() => {
          this.submissions.splice(number * 14, 14)
        }, 500)
      } else {
        console.log('1')
        this.getSubmissions()
      }
    }
  },
  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<style scoped lang="stylus">
  .el-table .accepted
    background: oldlace
  .el-table .warning-row
    background: oldlace
  .el-table .success-row
    background: #f0f9eb
</style>
