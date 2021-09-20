import { handleSignUp, handleSignIn } from './login'
import { getProducts } from './front/product'
import { setProductInCart, getProductInCart, setProductQuantity, delProductInCart } from './front/cart'

//===== front

// 產品
export const apiGetProducts = getProducts

// 購物車
export const apiSetProductInCart = setProductInCart
export const apiGetProductInCart = getProductInCart
export const apiSetProductQuantity = setProductQuantity
export const apiDelProductInCart = delProductInCart

// 登入/註冊
export const apiHandleSignUp = handleSignUp
export const apiHandleSignIn = handleSignIn

//===== backend
