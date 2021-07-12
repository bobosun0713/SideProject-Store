import axios from 'axios'

// 註冊
const signUp = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp',
  timeout: 60000,
})
signUp.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
      key: 'AIzaSyBMGOT6H_wIOZhYXqUsyzvpMNSgZhoXcbQ',
    }
    return config
  },
  (error) => {
    return Promise.reject(`註冊資料傳送錢發生錯誤 ，請稍後再試一次 => ${error}`)
  }
)
signUp.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(`註冊錯誤，請稍後再試一次 => ${error}`)
  }
)

// 登入
const signIn = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword',
  timeout: 60000,
})
signIn.interceptors.request.use(
  (config) => {
    config.params = {
      key: 'AIzaSyBMGOT6H_wIOZhYXqUsyzvpMNSgZhoXcbQ',
    }
    return config
  },
  (error) => {
    return Promise.reject(`登入前發生錯誤，請再試一次 => ${error}`)
  }
)
signIn.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(`登入後發生錯誤，請再試一次 => ${error}`, 1)
  }
)

const signUpPost = (params, config) => signUp.post('', params, config)
const signInPost = (params, config) => signIn.post('', params, config)

export default {
  signUpPost,
  signInPost,
}
