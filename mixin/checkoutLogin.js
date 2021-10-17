import { mapState } from 'vuex'
export const checkoutLogin = {
  computed: {
    ...mapState('login', ['isLogin', 'userToken']),
  },
  methods: {
    // TODO: 這邊取值有兩種，一種為vuex、另一種為cookies，主要因為要部署在github pages，因為是靜態部署所以在nuxtServiceInit是不會執行的
    // TODO: 所以這邊就用兩種方式取值，取Vuex或cookies其中一個。
    checkoutLogin() {
      let IS_LOGIN = false
      if (this.isLogin || this.$cookies.get('USER_TOKEN')) {
        IS_LOGIN = true
      }
      return IS_LOGIN
    },
  },
}

export default checkoutLogin
