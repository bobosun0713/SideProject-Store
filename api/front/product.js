import axios from '../setting/axios'

// 產品
export const getProducts = () => axios.get('/product.json')
