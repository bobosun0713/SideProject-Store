import axios from './axios'

// 產品
export const getProducts = () => axios.get('/product.json')
