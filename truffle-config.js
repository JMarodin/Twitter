const path = require('path');
const fs = require('fs');
const provider = require('@truffle/hdwallet-provider');
const secrets = JSON.parse(fs.readFileSync('.secrets.json').toString().trim());

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, 'app/src/contracts'),

  networks: {
    rinkeby: {
      provider: () =>
        new provider(
          secrets.privateKeys,
          'https://rinkeby.infura.io/v3/5c9a14344b384e61a739e335f2cbb01d',
          0,
          2
        ),
      network_id: 4,
      networkCheckTimeout: 1000000000,
      timeoutBlocks: 200,
    },
  },

  compilers: {
    solc: {
      version: '0.5.8',
    },
  },
  ens: {
    enabled: true,
  },
};
