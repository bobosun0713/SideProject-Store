import axios from 'axios'

const service = axios.create({
  baseURL: 'https://store-1855a-default-rtdb.asia-southeast1.firebasedatabase.app/',
  timeout: 60000,
})

service.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
      key: 'AIzaSyBMGOT6H_wIOZhYXqUsyzvpMNSgZhoXcbQ',
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(`資料讀取失敗 => ${error}`)
  }
)

const get = (url, params, config = {}) => service.get(url, { params, ...config })
const post = (url, params, config = {}) => service.post(url, { params, ...config })

export default {
  get,
  post,
}
