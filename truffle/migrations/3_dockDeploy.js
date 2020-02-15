const Dock = artifacts.require('dockchain')

module.exports = function (deployer) {
    deployer.deploy(Dock)
}