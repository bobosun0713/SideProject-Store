import imageAxios from '../setting/imageAxios.js'
import axios from '../setting/axios.js'

// 上傳產品
export const uploadImage = (data) => imageAxios.post('/image', data)

// 產品detail
export const getProductDetail = (id) => axios.get(`/product/${id}.json`)

// 新增產品
export const addProduct = (data) => axios.post('/product.json', { ...data })

// 更新產品
export const upDateProduct = (id, data) => axios.put(`/product/${id}.json`, { ...data })

// 刪除產品
export const delProduct = (id) => axios.del(`/product/${id}.json`)
