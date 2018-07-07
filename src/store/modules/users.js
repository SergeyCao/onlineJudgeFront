// 用户状态
import api from '../../components/oj/api'

const state = {
  profile: {}
}

const getters = {
  user: state => state.profile || {},
  profile: state => state.profile,
  isSignIn: (state, getters) => {
    return !!getters.user.id
  }
}

const actions = {
  getProfile ({commit}) {
    api.getProfile().then(res => {
      commit('setProfile', res.data.data)
    })
  }
}

const mutations = {
  setProfile (state, pro) {
    state.profile = pro
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
