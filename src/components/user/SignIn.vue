<template>
  <el-row>
    <el-col :span="8" :offset="8">
      <el-form :model="account" status-icon :rules="rule" ref="account" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名/邮箱" prop="username">
          <el-input type="text" v-model="account.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="account.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="account.isRemember">七天内自动登录</el-checkbox>
        </el-form-item>
        <el-form-item>
          <span style="float: left">
            <router-link :to="{name:'register'}" style="text-decoration: none;color:blue">没有账号？立即注册</router-link>
          </span>
          <span style="float: right">
            <router-link :to="{name:'forgetPwd'}" style="text-decoration: none;color:blue">忘记密码</router-link>
          </span>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('account')">提交</el-button>
          <el-button @click="resetForm('account')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import api from '../api'
import {mapGetters} from 'vuex'

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
        password: '',
        isRemember: false
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
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          api.signIn(this.account).then(res => {
            if (res.data.ok === 1) {
              alert('登陆成功')
              this.$store.commit('setProfile', res.data.data)
              console.log(res.data)
              this.$router.push('/')
              console.log(this.profile)
            } else {
              alert(res.data.msg)
              this.$refs.account.resetFields()
            }
          })
        } else {
          console.log('error submit!!')
          alert('error submit')
          return false
        }
      })
    },
    resetForm (form) {
      this.$refs[form].resetFields()
    }
  },
  computed: {
    ...mapGetters(['profile', 'isSignIn'])
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
