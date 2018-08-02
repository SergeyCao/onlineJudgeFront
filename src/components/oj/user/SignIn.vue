<template>
  <div class="login">
    <el-row>
      <el-col>
        <el-form :model="account" status-icon :rules="rule" ref="account" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名/邮箱" prop="username">
            <el-input type="text" v-model="account.username" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="account.password" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item style="margin-bottom: 0">
            <el-checkbox v-model="account.isRemember">七天内自动登录</el-checkbox>
          </el-form-item>
          <el-form-item>
            <span style="float: left;color: cornflowerblue;">
              <router-link :to="{name:'register'}" style="text-decoration: none;">没有账号？立即注册</router-link>
            </span>
            <span style="float: right;color: cornflowerblue;">
              <router-link :to="{name:'forgetPwd'}" style="text-decoration: none;">忘记密码</router-link>
            </span>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('account')"
                       style="float: left">提交</el-button>
            <el-button @click="resetForm('account')"
                       style="float: right">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
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
        isRemember: true
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
    submitForm: function (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          api.signIn(this.account).then(res => {
            if (res.data.code === 1) {
              this.$store.commit('setProfile', res.data.data)
              if (this.profile.isAdmin === 0) {
                this.$router.push('/')
              } else {
                this.$router.push('/admin')
              }
            } else {
              this.$refs.account.resetFields()
            }
          })
        } else {
          console.log('error submit!!')
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

<style scoped lang="stylus">
  .login
    position relative
    border-radius 10px
    background-image url("../../../assets/imgs/white.jpg")
    box-sizing border-box
    padding 20px
    width 40%
    margin 10px auto
    span a
      color cornflowerblue
      &:hover
        color lightgreen
</style>
