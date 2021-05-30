export default {
    state: {
        funds: 10000,
        stocks: []
    },

    mutations: {
        buyStock(state, { stockId, quantity, stockPrice }) {
            const record = state.stocks.find(element => element.id == stockId)
            if (record) {
                record.quantity += quantity
            } else {
                state.stocks.push({
                    id: stockId,
                    quantity: quantity
                })
            }
            state.funds -= stockPrice * quantity
        },
        sellStock(state, { stockId, quantity, stockPrice }) {
            const record = state.stocks.find(element => element.id == stockId)
            if (record.quantity > quantity) {
                record.quantity -= quantity
            } else {
                            // splice(index, qtd de elem a remover)
                state.stocks.splice(state.stocks.indexOf(record), 1)
            }
            state.funds += stockPrice * quantity
        },
        setPortfolio(state, portfolio) {
            state.funds = portfolio.funds
            state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [] 
        }
    },

    actions: {
        sellStock( { commit }, order) {
            commit('sellStock', order)
        }
    },

    getters: {
        // O getter abaixo acessa todos os getters da aplicação através do parametro getters abaixo.
        // Há um getter (getters.stocks) no modulo stocks.js que pega as açoes
       stockPortfolio(state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id)
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        })
       },
       funds(state) {
           return state.funds
       } 
    }
}