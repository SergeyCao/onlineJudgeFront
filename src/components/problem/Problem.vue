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
  </div>
</template>

<script>
import api from '../api'

export default {
  name: 'problem',
  props: ['id'],
  data () {
    return {
      problem: {}
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
    }
  }
}
</script>

<style scoped>

</style>
