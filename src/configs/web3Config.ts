// ** UseDapp Imports
import {ChainId, Config, Hardhat, Mainnet} from "@usedapp/core";


const INFURA_PROJECT_ID = "YOUR_INFURA_PROJECT_ID";

const config: Config = {
  networks: [ Mainnet, Hardhat ],
  readOnlyChainId: ChainId.Hardhat,
  readOnlyUrls: {
    [Mainnet.chainId]: "https://mainnet.infura.io/v3/" + INFURA_PROJECT_ID,
    [ChainId.Hardhat]: 'http://localhost:8545'
  },
  multicallAddresses: {
    [ChainId.Hardhat]: Mainnet.multicall2Address || "" // NOTE: We are forking mainnet locally
  }
}

export default config
