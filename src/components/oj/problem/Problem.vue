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
      result: {}
    }
  },
  mounted () {
    this.getProblem(this.id)
  },
  methods: {
    getProblem (id) {
      api.getProblem({'id': id}).then(res => {
        this.problem = res.data.data
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
