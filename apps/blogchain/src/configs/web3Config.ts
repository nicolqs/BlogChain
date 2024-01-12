import { ethers } from 'ethers';
import BlogChain from '@blogchain/solidity-contracts/abis/BlogChain.json';
import contractAddress from '@blogchain/solidity-contracts/abis/contract-address.json';

// ** UseDapp Imports
import { ChainId, Config, Hardhat, Mainnet } from '@usedapp/core';

const config: Config = {
  networks: [Mainnet, Hardhat],
  readOnlyChainId: ChainId.Hardhat,
  readOnlyUrls: {
    [Mainnet.chainId]:
      'https://mainnet.infura.io/v3/' + process.env.NEXT_PUBLIC_INFURA_KEY,
    [ChainId.Hardhat]: 'http://localhost:8545'
  },
  multicallAddresses: {
    [ChainId.Hardhat]: Mainnet.multicall2Address || '' // NOTE: We are forking mainnet locally
  }
};

// ** Web3 connect
const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
const signer = provider.getSigner();
const contract = new ethers.Contract(
  contractAddress.BlogChain,
  BlogChain.abi,
  signer
);

export { config, contract };
