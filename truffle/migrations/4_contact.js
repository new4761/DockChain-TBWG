const ContactFactory = artifacts.require('ContactFactory')

module.exports = function(deployer) {
    deployer.deploy(ContactFactory);
}
