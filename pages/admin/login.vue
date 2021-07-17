<template>
  <div class="login">
    <div class="login-wrapper">
      <img class="login-image" src="../../assets/image/login.gif" alt="" />
      <validation-observer ref="form" class="login-form" tag="form" @submit.prevent="submitAction">
        <h2 class="login-form-title">甜點電商後台</h2>
        <validation-provider v-slot="{ errors }" class="login-form-group" tag="div" rules="required|email">
          <input v-model.trim="adminUserInfo.email" class="login-form-group__input" type="text" placeholder="帳號" />
          <transition name="error">
            <p v-if="errors[0]" class="error__message login-form-group__error">
              {{ errors[0] }}
            </p>
          </transition>
        </validation-provider>

        <validation-provider v-slot="{ errors }" class="login-form-group" tag="div" rules="required|password">
          <input
            v-model.trim="adminUserInfo.password"
            class="login-form-group__input"
            type="password"
            placeholder="密碼"
          />
          <transition name="error">
            <p v-if="errors[0]" class="error__message login-form-group__error">
              {{ errors[0] }}
            </p>
          </transition>
        </validation-provider>

        <button class="login-form-button">LOGIN</button>
      </validation-observer>
    </div>
  </div>
</template>

<script>
import { apiHandleSignIn } from '@/api'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Login',
  layout: 'admin',
  data() {
    return {
      adminUserInfo: {
        email: 'admin@gmail.com',
        password: 'admin1234',
      },
    }
  },
  computed: {
    ...mapState('login', ['isAdminLogin']),
  },
  methods: {
    ...mapActions('login', ['setAdminLogin']),
    // 送出
    submitAction() {
      this.$refs.form.validate().then((success) => {
        if (!success) return
        this.signIn()
      })
    },

    // 登入函式
    signIn() {
      apiHandleSignIn(this.adminUserInfo)
        .then((res) => {
          this.setAdminLogin(res)
          this.$message({
            showClose: true,
            message: '登入成功',
            type: 'success',
          })
          this.$router.push('/admin')
        })
        .catch((err) => {
          console.log(err)
          this.$message({
            showClose: true,
            message: err,
            type: 'warning',
          })
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  background-color: map-get($theme-colors, light);
  display: flex;
  align-items: center;
  justify-content: center;

  &-wrapper {
    width: 700px;
    display: flex;
    justify-content: center;
    background-color: map-get($theme-colors, light);
    padding: 25px;
    border-radius: 15px;
    box-shadow: 5px 5px 15px map-get($theme-colors, shadow);
  }

  // 圖片
  &-image {
    width: 300px;
  }

  // 表單
  &-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    // 標題
    &-title {
      font-size: 2.5rem;
      background: linear-gradient(to right, #41b883, #708fb1);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 20px;
    }

    &-group {
      width: 230px;
      position: relative;
      margin-bottom: 30px;

      // 輸入框
      &__input {
        width: 100%;
        background-color: #f0f0f0;
        border: 0;
        padding: 12px 25px;
        border-radius: 25px;
        font-size: 14px;
      }

      // 錯誤訊息
      &__error {
        padding-left: 15px;
      }
    }

    // 按鈕
    &-button {
      cursor: pointer;
      padding: 9px 20px;
      border: 0;
      border-radius: 20px;
      box-shadow: 1.5px 1.5px 3px map-get($theme-colors, shadow);
      background-color: map-get($theme-colors, dark-green);
      color: map-get($theme-colors, light);
      transition: all 0.5s;
      &:active {
        transform: translateY(1.5px);
        box-shadow: unset;
      }
    }
  }
}
.error__message {
  height: 20px;
  font-size: 12px;
  color: map-get($theme-colors, error);
  position: absolute;
  bottom: -20px;
}
</style>
