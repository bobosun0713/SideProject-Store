export const actions = {
  // 如靜態部署到github時，這個ServiceInit就不會執行
  nuxtServerInit({ commit }, context) {
    const $cookie = context.app.$cookies

    const IS_LOGIN = $cookie.get('IS_LOGIN')
    const USER_TOKEN = $cookie.get('USER_TOKEN')
    if (IS_LOGIN && USER_TOKEN) {
      commit('login/SET_IS_LOGIN', IS_LOGIN)
      commit('login/SET_USER_TOKEN', USER_TOKEN)
    }

    const ADMIN_IS_LOGIN = $cookie.get('ADMIN_IS_LOGIN')
    const ADMIN_USER_TOKEN = $cookie.get('ADMIN_USER_TOKEN')
    if (ADMIN_IS_LOGIN && ADMIN_USER_TOKEN) {
      commit('login/SET_ADMIN_IS_LOGIN', IS_LOGIN)
      commit('login/SET_ADMIN_USER_TOKEN', USER_TOKEN)
    }
  },
}
