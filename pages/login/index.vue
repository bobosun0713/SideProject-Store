<template>
  <div class="login">
    <div class="login-container">
      <div class="login-option">
        <div class="login-option__registered">
          <h2 class="login-title">快來註冊吧</h2>
          <div class="login-text">青山依舊在，幾度夕陽紅。慣看秋月春。一壺濁酒喜相逢，浪花淘盡英雄。</div>
          <button class="login-button" type="button" @click="changeForm">SIGN UP</button>
        </div>
        <div class="login-option__registered">
          <h2 class="login-title">好吃的甜點</h2>
          <div class="login-text">青山依舊在，幾度夕陽紅。慣看秋月春。一壺濁酒喜相逢，浪花淘盡英雄。</div>
          <button class="login-button" type="button" @click="changeForm">LOGIN</button>
        </div>
      </div>

      <div class="login-option__rwd">
        <button class="login-option__rwd__button" type="button" @click="changeForm">會員登入</button>
        <button class="login-option__rwd__button" type="button" @click="changeForm">會員註冊</button>
      </div>

      <div class="login-forms" :class="[isChangeForm ? 'login-forms--active-left' : 'login-forms--active-right']">
        <div class="login-forms__content">
          <h2 class="login-forms__title">會員註冊</h2>
          <form class="login-forms__form">
            <div class="login-forms__form__item">
              <font-awesome :icon="['fas', 'user']" class="login-forms__form__icon"></font-awesome>
              <input
                v-model.trim="userSignUp.name"
                type="text"
                class="login-forms__form__input"
                placeholder="請輸入姓名"
              />
            </div>
            <div class="login-forms__form__item">
              <font-awesome :icon="['fas', 'signature']" class="login-forms__form__icon"></font-awesome>
              <input
                v-model.trim="userSignUp.email"
                type="text"
                class="login-forms__form__input"
                placeholder="請輸入EMAIL"
              />
            </div>
            <div class="login-forms__form__item">
              <font-awesome :icon="['fas', 'key']" class="login-forms__form__icon"></font-awesome>
              <input
                v-model.trim="userSignUp.password"
                type="password"
                class="login-forms__form__input"
                placeholder="請輸入密碼"
              />
            </div>

            <button class="login-forms__form__button" type="button" @click="signUp">註冊會員</button>
          </form>
        </div>

        <div class="login-forms__content">
          <h2 class="login-forms__title">會員登入</h2>
          <form class="login-forms__form">
            <div class="login-forms__form__item">
              <font-awesome :icon="['fas', 'signature']" class="login-forms__form__icon"></font-awesome>
              <input
                v-model.trim="userInfo.email"
                type="text"
                class="login-forms__form__input"
                placeholder="請輸入EMAIL"
              />
            </div>
            <div class="login-forms__form__item">
              <font-awesome :icon="['fas', 'key']" class="login-forms__form__icon"></font-awesome>
              <input
                v-model.trim="userInfo.password"
                type="password"
                class="login-forms__form__input"
                placeholder="請輸入密碼"
              />
            </div>
            <div class="login-forms__form__item">
              <div class="login-forms__form__text">忘記密碼?</div>
            </div>

            <button class="login-forms__form__button" type="button" @click="signIn">登入</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { apiHandleSignIn, apiHandleSignUp } from '@/api'

export default {
  name: 'Login',
  middleware: ['checkuser'],
  data() {
    return {
      userInfo: {
        email: 'test@gmail.com',
        password: '123456',
      },

      userSignUp: {
        name: '',
        email: '',
        password: '',
      },

      isChangeForm: false,
    }
  },
  computed: {
    ...mapState('login', ['isLogin']),
  },
  methods: {
    ...mapActions('login', ['setLogin']),
    changeForm() {
      this.isChangeForm = !this.isChangeForm
    },
    signIn() {
      apiHandleSignIn(this.userInfo)
        .then((res) => {
          this.setLogin(res)
          this.$message({
            showClose: true,
            message: '登入成功',
            type: 'success',
          })
          this.$router.push('/')
        })
        .catch((err) => {
          this.$message({
            showClose: true,
            message: err,
            type: 'warning',
          })
        })
    },

    signUp() {
      apiHandleSignUp(this.userSignUp)
        .then((res) => {
          this.setLogin(res)
          this.$message({
            showClose: true,
            message: '註冊成功！',
            type: 'success',
          })
          this.$router.push('/')
        })
        .catch((err) => {
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
// 登入
.login {
  margin: 60px 0 90px;
  display: flex;
  justify-content: center;
  text-align: center;

  @include RWD_768 {
    margin: 0 0 50px;
  }

  &-container {
    width: 800px;
    height: 350px;
    background: url('@/assets/image/success/success-banner.jpg') no-repeat center center;
    border-radius: 15px;
    background-size: cover;
    box-shadow: 5px 5px 10px 0 map-get($theme-colors, shadow);
    display: flex;
    align-items: center;
    position: relative;

    @include RWD_768 {
      border-radius: 0;
      height: 500px;
    }
  }

  &-option {
    display: flex;
    justify-content: space-around;
    width: 100%;

    @include RWD_768 {
      display: none;
    }

    &__registered {
      background-color: rgba(255, 255, 255, 0.75);
      border-radius: 15px;
      width: 300px;
      height: 200px;
      padding: 20px;
    }

    &__rwd {
      position: absolute;
      bottom: -50px;
      width: 100%;
      display: none;

      @include RWD_768 {
        display: flex;
      }

      &__button {
        flex: 1;
        height: 50px;
        font-size: 16px;
        font-weight: bold;
        color: map-get($theme-colors, dark-green);
        background-color: map-get($theme-colors, light-green);

        &:nth-child(1) {
          border-right: 2px solid map-get($theme-colors, dark-green);
        }
      }
    }
  }

  &-text {
    margin: 10px 0 15px;
    text-align: left;
  }

  &-button {
    width: 100px;
    padding: 5px;
    border: 2px solid map-get($theme-colors, dark-green);
    border-radius: 8px;
    margin: 0 auto;

    font-weight: 600;
    color: map-get($theme-colors, dark-green);
  }

  &-forms {
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50px;
    transform: translate(100%, -50%);
    height: 400px;
    width: 350px;
    border-radius: 8px;
    background-color: map-get($theme-colors, light-green);
    box-shadow: 5px 5px 10px 0 map-get($theme-colors, dark-green-opacity);

    @include RWD_768 {
      left: 50%;
      transform: translate(-50%, -50%);
    }
    @include RWD_576 {
      width: 325px;
    }

    &--active-left {
      animation: changeFormLeft 1s forwards;
      .login-forms__content:nth-child(1) {
        animation: changeSignUpForm 0.8s forwards;
      }

      @include RWD_768 {
        animation: unset;
      }
    }
    &--active-right {
      animation: changeFormRight 1s forwards;
      .login-forms__content:nth-child(2) {
        animation: changeLoginForm 0.8s forwards;
      }

      @include RWD_768 {
        animation: unset;
      }
    }
    @keyframes changeFormLeft {
      0% {
        transform: translate(100%, -50%);
      }
      50% {
        transform: translate(-5%, -50%);
      }
      100% {
        transform: translate(0, -50%);
      }
    }
    @keyframes changeFormRight {
      0% {
        transform: translate(0, -50%);
      }
      50% {
        transform: translate(calc(100% + 15px), -50%);
      }
      100% {
        transform: translate(100%, -50%);
      }
    }

    @keyframes changeLoginForm {
      100% {
        opacity: 1;
        visibility: visible;
        transform: translate(-50%, -50%);
      }
    }

    @keyframes changeSignUpForm {
      100% {
        opacity: 1;
        visibility: visible;
        transform: translate(-50%, -50%);
      }
    }

    &__title {
      font-size: 32px;
      margin-bottom: 24px;
      color: map-get($theme-colors, dark-green);
    }
    &__content {
      position: absolute;
      top: 50%;
      left: 50%;
      padding: 40px 0;

      opacity: 0;
      visibility: hidden;

      // 切換表單
      &:nth-child(1) {
        transform: translate(-130%, -50%);
      }
      &:nth-child(2) {
        transform: translate(30%, -50%);
      }
    }
    &__form {
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      &__item {
        margin-bottom: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &__icon {
        margin-right: 12px;
        width: 24px;
        font-size: 20px;
        color: map-get($theme-colors, dark-green);
      }

      &__input {
        height: 40px;
        width: 220px;
        border: 0;
        padding: 0 12px;
      }

      &__text {
        height: 30px;
        line-height: 30px;
        font-size: 18px;
        font-weight: bold;
        letter-spacing: 3px;
        color: map-get($theme-colors, dark-green);
        cursor: pointer;

        &:active {
          color: map-get($theme-colors, dark-green-opacity);
        }
      }

      &__button {
        margin: 0 auto;
        width: 120px;
        padding: 8px 0;
        border-radius: 12px;
        color: map-get($theme-colors, light);
        background-color: map-get($theme-colors, dark-green);
        box-shadow: 1.5px 1.5px 2px 1px #333;
        font-size: 16px;
        font-weight: bold;

        transition: all 0.3s;

        &:active {
          box-shadow: unset;
        }
      }
    }
  }
}
</style>
