const Dockchain = artifacts.require('Dockchain')

module.exports = function(deployer) {
    deployer.deploy(Dockchain)
}
