export const state = () => ({
  isLogin: false,
  userToken: '',

  isAdminLogin: false,
  adminUserToken: '',
})

export const mutations = {
  SET_USER_TOKEN(state, value) {
    state.userToken = value
  },
  SET_IS_LOGIN(state, value) {
    state.isLogin = value
  },

  SET_ADMIN_USER_TOKEN(state, value) {
    state.userToken = value
  },
  SET_ADMIN_IS_LOGIN(state, value) {
    state.isLogin = value
  },
}

export const actions = {
  setLogin({ commit }, value) {
    this.$cookies.set('USER_TOKEN', value.localId)
    this.$cookies.set('IS_LOGIN', true)

    commit('SET_USER_TOKEN', value.localId)
    commit('SET_IS_LOGIN', true)
  },
  setLoginOut({ commit }) {
    this.$cookies.remove('USER_TOKEN')
    this.$cookies.remove('IS_LOGIN')
    commit('SET_USER_TOKEN', '')
    commit('SET_IS_LOGIN', false)
  },

  setAdminLogin({ commit }, value) {
    this.$cookies.set('ADMIN_USER_TOKEN', value.localId)
    this.$cookies.set('ADMIN_IS_LOGIN', true)

    commit('SET_ADMIN_USER_TOKEN', value.localId)
    commit('SET_ADMIN_IS_LOGIN', true)
  },

  setAdminLoginOut({ commit }) {
    this.$cookies.remove('ADMIN_USER_TOKEN')
    this.$cookies.remove('ADMIN_IS_LOGIN')
    commit('SET_ADMIN_USER_TOKEN', '')
    commit('SET_ADMIN_IS_LOGIN', false)
  },
}
