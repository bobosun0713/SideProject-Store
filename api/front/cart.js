import axios from '../setting/axios'

// 產品
export const setProductInCart = (id, args) => axios.post(`/cart/${id}.json`, { ...args })
export const getProductInCart = (id) => axios.get(`/cart/${id}.json`)

// 更新產品數量
export const setProductQuantity = (userToken, id, args) => axios.put(`/cart/${userToken}/${id}/quantity.json`, args)

// 刪除產品
export const delProductInCart = (userToken, id) => axios.del(`/cart/${userToken}/${id}.json`)
