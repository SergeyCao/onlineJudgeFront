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
    <el-row :gutter="20"
    style="margin-bottom: 10px"
    >
      <el-col :span="6">
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 1}"
          placeholder="source"
          v-model="data.source">
        </el-input>
      </el-col>
      <el-col :span="6">
        <el-input
          type="number"
          :autosize="{ minRows: 1, maxRows: 1}"
          placeholder="time limit (ms)"
          v-model="data.timeLimit"
          style="padding: 5px"
        >
        </el-input>
      </el-col>
      <el-col :span="6">
        <el-input
          type="number"
          :autosize="{ minRows: 1, maxRows: 1}"
          placeholder="memory limit"
          v-model="data.memLimit"
          style="padding: 5px"
        >
        </el-input>
      </el-col>
    </el-row>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 400}"
      placeholder="description"
      v-model="data.description">
    </el-input>
    <div style="margin: 20px 0;"></div>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 400}"
      placeholder="input"
      v-model="data.input">
    </el-input>
    <div style="margin: 20px 0;"></div>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 400}"
      placeholder="output"
      v-model="data.output">
    </el-input>
    <div style="margin: 20px 0;"></div>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 400}"
      placeholder="sample input"
      v-model="data.sampleInput">
    </el-input>
    <div style="margin: 20px 0;"></div>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 400}"
      placeholder="sample output"
      v-model="data.sampleOutput">
    </el-input>
    <div style="margin: 20px 0;"></div>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 400}"
      placeholder="hint"
      v-model="data.hint">
    </el-input>
      <el-button @click="addProblem" type="primary" icon="el-icon-edit" style="margin-top: 10px;margin-bottom: 10px;float: left" >添加题目</el-button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import api from '../oj/api'
export default {
  name: 'AddProblem',
  data () {
    return {
      data: {
        title: 'title',
        source: '',
        timeLimit: 1000,
        memLimit: 1024000,
        description: '',
        input: '',
        output: '',
        sampleInput: '',
        sampleOutput: '',
        hint: '',
        author: ''
      }
    }
  },
  methods: {
    addProblem () {
      this.data.author = this.user.username
      api.addProblem(this.data).then(res => {
        if (res.data.code === 1) {
          alert('上传成功')
        }
      })
    }
  },
  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<style scoped lang="stylus">
  .addProblem
    width 90%
    margin 10px auto
</style>
