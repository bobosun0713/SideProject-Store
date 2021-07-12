export const actions = {
  nuxtServerInit({ commit }, context) {
    const $cookie = context.app.$cookies
    const IS_LOGIN = $cookie.get('IS_LOGIN')
    const USER_TOKEN = $cookie.get('USER_TOKEN')
    if (IS_LOGIN && USER_TOKEN) {
      commit('login/SET_IS_LOGIN', IS_LOGIN)
      commit('login/SET_USER_TOKEN', USER_TOKEN)
    }
  },
}
