var Web3 = require('web3')
// or
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))

// dev provider
web3.setProvider('ws://localhost:9545')
// console.log("is worked");
// let listAccounts

// web3.eth.getAccounts()
export const state = () => ({
  ethAccountsList: {},
  accountsBalance: 0
})

export const mutations = {
  setAccountsList (state, data) {
        // console.log(' mutations called')
    state.ethAccountsList = data
        //
  },
  setAccountsBalance (state, data) {
        // console.log(' mutations called')
    state.accountsBalance = data
        //
  }
}

export const actions = {
  async setAccountsList (context) {
    const data = await web3.eth.getAccounts().then(res => { // console.log(res);
      return res
    })
    await context.commit('setAccountsList', data)
  },
  async setEthAccountsBalance (context,address) {
    console.log(address)
    const data = await web3.eth.getBalance(address).then(res => { // console.log(res);
      return res
    })
    await context.commit('setAccountsBalance', data)
  }
//   setEthAccountsBalance: (context) => async (_id) => {
//     const tokenBalance = await web3.eth.getBalance(_id).then(res => {
//       return res
//     })
//     console.log(tokenBalance)
//     await context.commit('setAccountsBalance', tokenBalance)
//   }
}
export const getters = {
  getEthAccountsId: (state) => (_id) => {
    return state.ethAccountsList[_id]
        //
  },
  getEthAccountsBalance (state) {
    return state.accountsBalance
        //
  }
}
