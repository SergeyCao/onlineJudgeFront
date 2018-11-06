<template>
    <div class="addProblem">
    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 40}"
      placeholder="title"
      v-model="data.title"
      style="margin-bottom: 10px"
    >
    </el-input>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 400}"
      placeholder="content"
      v-model="data.content">
    </el-input>
      <el-button @click="addAnnouncement" type="primary" icon="el-icon-edit" style="margin-top: 10px;margin-bottom: 10px;float: left" >添加公告</el-button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import api from '../oj/api'
export default {
    name: 'addAnnouncement',
    data () {
        return {
            data: {
                title: '',
                date: '',
                author: '',
                content: ''
            }
        }
    },
    methods: {
        addAnnouncement () {
            this.data.author = this.user.username
            this.data.date = (new Date()).valueOf()
            api.addAnnouncement(this.data).then(res => {
                if (res.data.code === 1) {
                    alert('添加成功!')
                    this.$router.push('/')
                } else {
                    alert('添加失败!')
                }
            })
        }
    },
  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<style lang="stylus" scoped>
  .addProblem
    width 90%
    margin 10px auto
</style>
