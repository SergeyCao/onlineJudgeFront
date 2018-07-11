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
        <a href="javascript:void(0)" style="display: inline-block;" @click="Uploadstart">
          <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        </a>
      </div>
    </div>
    <input type="file" ref="btn_file" style="display:none" @change="Uploadend">
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
      fileList: []
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
    Uploadstart () {
      this.$refs.btn_file.click()
    },
    Uploadend () {
      api.ajax_file('/admin/add_input', 'post', this.$refs.btn_file.files[0]).then(res => {
        if (res.data.code === 1) {
          this.$refs.bin_file.files = []
        } else {
          alert('上传失败')
        }
      })
    }
  },
  computed: {
    ...mapGetters(['isSignIn', 'user'])
  }
}
</script>

<style scoped>

</style>
