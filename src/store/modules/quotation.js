const quotation = {
  state: {
    current: null
  },
  mutations: {
    SET_QUOTATION: (state, paylod) => {
      state.current =  paylod
    }
  },
  actions: {
    GetQuotation({ commit }, paylod) {
      return new Promise((resolve, reject) => {
        getQuotation(paylod).then(response => {
          if (!response.data) {
            reject('error')
          }
          const data = response.data
          commit('SET_QUOTATION', data.question)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
}

export default quotation
