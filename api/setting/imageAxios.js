import axios from 'axios'

const service = axios.create({
  baseURL: 'https://api.imgur.com/3/image',
  timeout: 60000,
})

service.interceptors.request.use(
  (config) => {
    config.headers = {
      Authorization: `Bearer 2f95db7c5e22a977e40a5b70bae575b2d4db6d00`,
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

const post = (url, params, config = {}) => service.post(url, params, config)
export default {
  post,
}
