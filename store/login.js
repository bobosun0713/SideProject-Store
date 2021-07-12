export const state = () => ({
  isLogin: false,
  userToken: false,
})

export const mutations = {
  SET_USER_TOKEN(state, value) {
    state.userToken = value.localId
  },
  SET_IS_LOGIN(state, value) {
    state.isLogin = value
  },
}

export const actions = {
  setLogin({ commit }, value) {
    this.$cookies.set('USER_TOKEN', value.localId)
    this.$cookies.set('IS_LOGIN', true)

    commit('SET_USER_TOKEN', value)
    commit('SET_IS_LOGIN', true)
  },

  setLoginOut({ commit }) {
    this.$cookies.remove('USER_TOKEN')
    this.$cookies.remove('IS_LOGIN')
    commit('SET_USER_TOKEN', '')
    commit('SET_IS_LOGIN', false)
  },
}
