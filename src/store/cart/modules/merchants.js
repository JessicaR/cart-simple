const state = {
  all: []
}

const mutations = {
  RECEIVE_STORES (state, stores) {
    state.all = stores
  },

  // ADD_TO_CART (state, productId) {
  //   state.all
  //       .find(product => product.id === productId)
  //       .inventory--
  // },

  // REMOVE_FROM_CART (state, removedProduct) {
  //   state.all
  //       .find(product => product.id === removedProduct.id)
  //       .inventory += removedProduct.quantity
  // }
}

export default {
  state,
  mutations
}
