import { ethers } from 'ethers'
import BlogChain from 'src/contracts/BlogChain.json'
import contractAddress from 'src/contracts/contract-address.json'

// ** UseDapp Imports
import { ChainId, Config, Hardhat, Mainnet } from '@usedapp/core'

const config: Config = {
  networks: [Mainnet, Hardhat],
  readOnlyChainId: ChainId.Hardhat,
  readOnlyUrls: {
    [Mainnet.chainId]: 'https://mainnet.infura.io/v3/' + process.env.INFURA_KEY!,
    [ChainId.Hardhat]: 'http://localhost:8545'
  },
  multicallAddresses: {
    [ChainId.Hardhat]: Mainnet.multicall2Address || '' // NOTE: We are forking mainnet locally
  }
}

// ** Web3 connect
const privateKey = process.env.WALLET_PRIVATE_KEY || ''
const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545')
const wallet = new ethers.Wallet(privateKey, provider)
const contract = new ethers.Contract(contractAddress.BlogChain, BlogChain.abi, wallet)

export { config, contract }
