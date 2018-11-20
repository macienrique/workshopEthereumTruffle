var Token = artifacts.require("./Token.sol");

module.exports = function(deployer) {
  deployer.deploy(Token, 10000, "Token everis", 0, "ever");
};
