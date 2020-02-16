const Provider = artifacts.require('provider')

module.exports = function(deployer) {
    deployer.deploy(Provider);
}
