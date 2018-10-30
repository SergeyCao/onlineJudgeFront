<template>
  <el-row>
    <el-col :span="8" :offset="8">
      <el-form :model="account" status-icon :rules="rule" ref="account" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="account.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="account.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="checkPassword">
          <el-input type="password" v-model="account.checkPassword" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email" :rules="[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
          ]"
        >
          <el-input type="email" v-model="account.email" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('account')">提交</el-button>
          <el-button @click="resetForm('account')">重置</el-button>
        </el-form-item>
        <el-form-item>
          <span>
            <router-link :to="{name:'signIn'}" style="text-decoration: none;color:blue">已有账号？立即登陆！</router-link>
          </span>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import api from '../api'
export default {
  name: 'Register',
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
        if (this.account.checkPassword !== '') {
          this.$refs.account.validateField('checkPassword')
        }
        callback()
      }
    }
    let validCheckPwdPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.account.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      account: {
        username: '',
        password: '',
        checkPassword: '',
        email: ''
      },
      rule: {
        username: [
          {validator: validUsernamePass, trigger: 'blur', required: true}
        ],
        password: [
          {validator: validPasswordPass, trigger: ['blur', 'change'], required: true}
        ],
        checkPassword: [
          {validator: validCheckPwdPass, trigger: ['blur', 'change'], required: true}
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          api.register(this.account).then(res => {
            if (res.data.code === 1) {
              alert('注册成功')
              this.$router.push('/')
            } else {
              alert(res.data.msg)
              this.$refs.account.resetFields()
            }
          })
        } else {
          alert('error submit')
          return false
        }
      })
    },
    resetForm (form) {
      this.$refs[form].resetFields()
    }
  }
}
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
    margin-top: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
