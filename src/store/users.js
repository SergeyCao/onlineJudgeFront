// 用户状态
const state = {
  profile: {}
}

const getters = {
  user: state => state.profile.user || {},
  profile: state => state.profile,
  isSignIn: (state, getters) => {
    return !!getters.user.id
  }
}

export default {
  state,
  getters
}
