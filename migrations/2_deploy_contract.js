const myContract = artifacts.require("./Supplychain.sol");

module.exports = function(deployer){
  deployer.deploy(myContract);
}