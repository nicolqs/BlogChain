require('@nomiclabs/hardhat-ethers')

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.20',

  settings: {
    optimizer: {
      enabled: true,
      runs: 10000
    }
  },

  networks: {
    localhost: {
      // forking: {
      //   url: "https://mainnet.infura.io/v3/" + process.env.INFURA_PROJECT_ID,
      //   blockNumber: 14807093
      // }
      url: 'http://127.0.0.1:8545/'
    }
    // goerli: {
    //   url: "https://goerli.infura.io/v3/" + INFURA_PROJECT_ID,
    //   accounts: {
    //     mnemonic: MNEMONIC,
    //     // path: "m/44'/60'/0'/0",
    //     // initialIndex: 0,
    //     // count: 20,
    //     // passphrase: "",
    //   }
    // }
  }
}
