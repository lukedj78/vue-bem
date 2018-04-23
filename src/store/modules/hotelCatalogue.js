import GeoTree from 'geo-tree'

const hotelCatalogue = {
  state: {
    catalogue: null
  },
  mutations: {
    SET_HOTEL_CATALOGUE: (state, paylod) => {
      state.catalogue =  paylod
    }
  },
  actions: {
    InitHotelCatalogue({ commit }){
      return new Promise((resolve, reject) => {
        commit('SET_HOTEL_CATALOGUE', data.question)
      })
    },
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
