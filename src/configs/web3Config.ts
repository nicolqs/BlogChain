import { ethers } from 'ethers'
import BlogChain from 'src/contracts/BlogChain.json'
import contractAddress from 'src/contracts/contract-address.json'
import web3config from './web3config.json'

// ** UseDapp Imports
import { ChainId, Config, Hardhat, Mainnet } from '@usedapp/core'

const config: Config = {
  networks: [Mainnet, Hardhat],
  readOnlyChainId: ChainId.Hardhat,
  readOnlyUrls: {
    [Mainnet.chainId]: 'https://mainnet.infura.io/v3/' + web3config.infuraKey,
    [ChainId.Hardhat]: 'http://localhost:8545'
  },
  multicallAddresses: {
    [ChainId.Hardhat]: Mainnet.multicall2Address || '' // NOTE: We are forking mainnet locally
  }
}

// ** Web3 connect
const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545')
const signer = provider.getSigner()
const contract = new ethers.Contract(contractAddress.BlogChain, BlogChain.abi, signer)

export { config, contract }
