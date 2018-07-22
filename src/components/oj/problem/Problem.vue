<template>
  <div>
    <b>
      {{this.problem.title}}<br/>
    </b>
    <div style="text-align: left">
      {{this.problem.description}}<br/><br/>
      <b>input:<br/></b>
      {{this.problem.input}}<br/>
      <b>output:<br/></b>
      {{this.problem.output}}<br/><br/>
      <b>SampleInput<br/></b>
      {{this.problem.sampleInput}}<br/>
      <b>SampleOutput<br/></b>
      {{this.problem.sampleOutput}}<br/>
    </div>
    <div v-if="isSignIn">
    <el-input
        type="textarea"
        :autosize="{ minRows: 10, maxRows: 10}"
        placeholder="请输入内容"
        v-model="code">
      </el-input>
      <pre style="float: left;text-align: left" >
        {{this.result.code}}
      </pre>
      <el-button @click="submit" type="primary" style="margin-top: 10px">提交<i class="el-icon-upload el-icon--right"></i></el-button>
      <div v-if="user.isAdmin">
        添加输入数据:
        <el-upload
          class="upload-demo"
          ref="upload1"
          :multiple=false
          action="/admin/add_input"
          :data="content"
          :headers="header"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          :auto-upload="false">
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload1">上传到服务器</el-button>
        </el-upload>
        添加输出数据:
        <el-upload
          class="upload-demo"
          ref="upload"
          :multiple=false
          action="/admin/add_output"
          :data="content"
          :headers="header"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          :auto-upload="false">
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        </el-upload>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../api'
import {mapGetters} from 'vuex'

export default {
  name: 'problem',
  props: ['id'],
  data () {
    return {
      problem: {},
      code: '',
      sub: {},
      result: {},
      fileList: [],
      header: {'token': 'isAdmin'},
      content: {}
    }
  },
  mounted () {
    this.getProblem(this.id)
  },
  methods: {
    getProblem (id) {
      api.getProblem({'id': id}).then(res => {
        this.problem = res.data.data
        this.content = {'id': this.problem.id}
        console.log(this.problem)
      })
    },
    submit () {
      var sub = {
        'code': this.code,
        'date': new Date(),
        'problem_id': this.problem.id,
        'username': this.user.username,
        'language': 1
      }
      api.submit(sub).then(res => {
        console.log(res.data.data)
        this.$router.push('/status')
      })
    },
    submitUpload1 () {
      this.$refs.upload1.submit()
    },
    submitUpload () {
      this.$refs.upload.submit()
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    }
  },
  computed: {
    ...mapGetters(['isSignIn', 'user'])
  }
}
</script>

<style scoped>

</style>
