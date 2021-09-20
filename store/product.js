import { apiGetProducts } from '../api'

export const state = () => ({
  isLoading: false,
  productList: [],
})

export const mutations = {
  SET_PRODUCT_DATA(state, value) {
    state.productList = value
  },
}

export const actions = {
  async getProducts({ commit }) {
    const res = await apiGetProducts()
    const list = []
    for (let item in res) {
      list.push({
        id: item,
        ...res[item],
      })
    }
    commit('SET_PRODUCT_DATA', list)
  },
}
