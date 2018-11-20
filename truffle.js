/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

var Web3 = require('web3');

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!

  networks: {

    node1: {
      provider: () => {
        return new Web3.providers.HttpProvider('https://u0pezj8cub:g8wyQ-sHLOGt9La7Na32BCNng4306CjtVHBsxeSNqxs@u0w7gzexaj-u0bb4vt72n-rpc.us-east-2.kaleido.io');
      },
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 4500000
    }

  }

};
