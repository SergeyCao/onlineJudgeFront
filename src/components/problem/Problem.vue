<template>
  <div>
    title:
    {{this.problem.title}}<br/>
    <div style="text-align: left">
      description<br/>
      {{this.problem.description}}<br/>
      SampleInput<br/>
      {{this.problem.description}}<br/>
      SampleOutput<br/>
      {{this.problem.description}}<br/>
      input:<br/>
      {{this.problem.input}}<br/>
      output:<br/>
      {{this.problem.output}}<br/>
    </div>
    <el-input v-if="isSignIn"
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
        'user_id': this.user.id,
        'language': 1
      }
      api.submit(sub).then(res => {
        console.log(res.data.data)
        this.$router.push('/status')
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
