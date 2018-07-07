<template>
  <pre style="float: left;text-align: left" >
    <div>{{this.code}}</div>

  </pre>

</template>

<script>
import api from '../api'

export default {
  name: 'Submission',
  props: ['id'],
  data () {
    return {
      code: ''
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      api.getSubmission(this.id).then(res => {
        this.code = res.data.data
      })
    }
  }
}
</script>

<style scoped>

</style>
