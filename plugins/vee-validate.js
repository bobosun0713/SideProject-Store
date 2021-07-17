import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

extend('email', {
  ...email,
  message: 'Email格式錯誤',
})

extend('password', (value) => {
  let reg = /^([a-zA-Z]+\d+|\d+[a-zA-Z]+)[a-zA-Z0-9]*$/
  return !reg.test(value) ? '密碼格式必須含有英文及數字' : true
})

extend('required', {
  ...required,
  message: '欄位不能為空',
})

extend('image', {
  ...required,
  message: '至少上傳一張圖片',
})
