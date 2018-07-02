<template>
  <div>
    title:
    {{this.problem.title}}<br/>
    description
    {{this.problem.description}}<br/>
    input:
    {{this.problem.input}}<br/>
    output:
    {{this.problem.output}}<br/>
    <el-input v-if="isSignIn"
      type="textarea"
      :autosize="{ minRows: 10, maxRows: 10}"
      placeholder="请输入内容"
      v-model="code">
    </el-input>
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
      code: ''
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
      api.submit({'code': this.code}).then(res => {
        console.log(res.data.data)
      })
    }
  },
  computed: {
    ...mapGetters(['isSignIn'])
  }
}
</script>

<style scoped>

</style>
