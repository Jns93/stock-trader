import Vue from 'vue'

export default {
    loadData({ commit }) {
        console.log('chegou')
        Vue.prototype.$http('data.json')
                        .then(resp => {
                            const data = resp.data
                            if(data) {
                                commit('setStocks', data.stocks)
                                commit('setPortfolio', {
                                    funds: data.funds,
                                    stockPortfolio: data.stockPortfolio
                                })
                            }
                        })
    }
}