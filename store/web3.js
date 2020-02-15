//import { abi } from '../abi/dockchain'
import { abi } from '../abi/product'
import { productAbi } from '../abi/product'
import { productFactoryAbi } from '../abi/productFactory'
var Web3 = require('web3')
    // or


var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
    // const ganache = require("ganache-core");
    // web3.setProvider(ganache.provider());
    // dev provider
    //web3.eth.setProvider('http://localhost:8545')
    // console.log("is worked");
    // let listAccounts






//var myCalculatorAddress = '0xCd8887656D62eaa530c8e455e9452A63C8Dcb  6Fa'
//let myCla = new web3.eth.Contract(myCalculatorABnpm install --save ganache-coreI, myCalculatorAddress)
web3.eth.defaultAccount = '0xbb4634aA1d5Ede0503C2B4DAA695cF07372e8783';
//web3.eth.getAccounts().then(console.log)
//console.log(web3.eth.accounts[0])
var myDockchainAddress = '0x4047383FD9A87BC55282a9D23817f9eE0fcd9F6c'

var ownAdd = web3.eth.defaultAccount;
var desAcc = '0xBaF5669d726e66afaDc2228f17842Ca7F740f50D';

let aproductFactoryAbi = new web3.eth.Contract(productFactoryAbi, myDockchainAddress)
let aproductAbi = new web3.eth.Contract(productAbi, myDockchainAddress)
    //let myClaDock = new web3.eth.Contract(abi, myDockchainAddress)

async function test() {
    await aproductFactoryAbi.methods.createProduct(ownAdd, desAcc, "test").send({ from: web3.eth.defaultAccount, gas: 4000000 }).then(console.log).catch(console.error);
    await aproductFactoryAbi.methods.getAllProduct().call().then(console.log).catch(console.err);
    await console.log("===================");

}
test()
    // async function mytest() {
    //     //  console.log("asd");

//     await myClaDock.methods.addConsul("Thai", 1).send({ from: web3.eth.defaultAccount, gas: 4000000 }).then(console.log).catch(console.error);
//     await myClaDock.methods.getConsul(0).call().then(console.log).catch(console.error);
// }
// mytest();

// export const state = () => ({
//     ethAccountsList: {},
//     accountsBalance: 0
// })

// export const mutations = {
//     setAccountsList(state, data) {
//         // console.log(' mutations called')
//         state.ethAccountsList = data
//             //
//     },
//     setAccountsBalance(state, data) {
//         // console.log(' mutations called')
//         state.accountsBalance = data
//             //
//     }
// }

// export const actions = {
//     // async setAccountsList(context) {
//     //   const data = await web3.eth.getAccounts().then(res => { // console.log(res);
//     //     return res
//     //   })
//     //   await context.commit('setAccountsList', data)
//     // },
//     // async setEthAccountsBalance(context, address) {
//     //   console.log(address)
//     //   const data = await web3.eth.getBalance(address).then(res => { // console.log(res);
//     //     return res
//     //   })
//     //   await context.commit('setAccountsBalance', data)
//     // },
//     // async setConsul(context) {
//     //     const data = await web3.eth.setConsul("Thai", 1)
//     // },
//     // async getConsul(context) {
//     //     const data = await web3.eth.getConsul("thai").then(res => {
//     //         console.log(res);
//     //         return res;
//     //     })
//     // }
// }
// export const getters = {
//     getEthAccountsId: (state) => (_id) => {
//         return state.ethAccountsList[_id]
//             //
//     },
//     getEthAccountsBalance(state) {
//         return state.accountsBalance
//             //
//     }
// }
