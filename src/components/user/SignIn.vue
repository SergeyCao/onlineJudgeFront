<template>
  <el-form :model="account" status-icon :rules="rule" ref="account" label-width="100px" class="demo-ruleForm">
    <el-form-item label="用户名/邮箱" prop="username">
      <el-input type="text" v-model="account.username" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="account.password" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('account')">提交</el-button>
      <el-button @click="resetForm('account')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'SignIn',
  data () {
    let validPasswordPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    let validUsernamePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    return {
      account: {
        username: '',
        password: ''
      },
      rule: {
        username: [
          { validator: validUsernamePass, trigger: 'blur' }
        ],
        password: [
          { validator: validPasswordPass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetForm (form) {
      this.$refs[form].resetFields()
    }
  }
}
</script>

<style scoped>

</style>
