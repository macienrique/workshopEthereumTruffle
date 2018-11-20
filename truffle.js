var Web3 = require('web3');

module.exports = {

  networks: {

    node1: {
      provider: () => {
        return new Web3.providers.HttpProvider('https://u0nx66405x:wMZbL9NROcp8IUBNGldXYIHyNzsWAljzZrYOuR84WvE@u0re0h7s0t-u0jdfs5lu8-rpc.us-east-2.kaleido.io');
      },
      network_id: "*",
      gasPrice: 0,
      gas: 4500000
    }

  }

};
