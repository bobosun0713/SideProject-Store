import { apiGetProductInCart } from '@/api'

export const state = () => ({
  cartList: [],
  fareTotal: 50,
})

export const getters = {
  cartTotal(state) {
    return state.cartList.reduce((arr, curr) => Number(arr) + Number(curr.price) * Number(curr.quantity), 0)
  },
}

export const mutations = {
  SET_CART_DATA(state, value) {
    state.cartList = value
  },
}

export const actions = {
  async getCarts({ commit }, value) {
    let res = await apiGetProductInCart(value)
    let resData = []
    for (let item in res) {
      resData.push({
        id: item,
        ...res[item],
      })
    }
    commit('SET_CART_DATA', resData)
  },
}
