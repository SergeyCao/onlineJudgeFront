<template>
  <div>{{this.id}} <br>
  {{this.code}}
  </div>
  
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
