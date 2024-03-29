import { handleSignUp, handleSignIn } from './login'
import { getProducts } from './front/product'
import { setProductInCart, getProductInCart, setProductQuantity, delProductInCart } from './front/cart'
import { uploadImage, getProductDetail, addProduct, delProduct, upDateProduct } from './admin/product'

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
export const apiUploadImage = uploadImage
export const apiProductDetail = getProductDetail
export const apiAddProduct = addProduct
export const apiUpdateProduct = upDateProduct
export const apiDelProduct = delProduct
