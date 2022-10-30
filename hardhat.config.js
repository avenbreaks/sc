require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");
require("hardhat-deploy-ethers");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY
const POLYGON_MAINNET_RPC_URL = process.env.POLYGON_MAINNET_RPC_URL || "https://polygon-mainnet.alchemyapi.io/v2/your-api-key"
const ETHEREUM_MAINNET_RPC_URL = process.env.ETHEREUM_MAINNET_RPC_URL || "https://mainnet.infura.io/v3/your-api-key"


module.exports = {
  defaultNetwork: "ethereum",
  networks: {
    ethereum: {
    },
    
    ethereum: {
      url: ETHEREUM_MAINNET_RPC_URL,
      chainID: 1,
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
    },
  },
  solidity: {
    version: "0.7.6",
     settings: {
       optimizer: {
         enabled: true,
         runs: 200,
       },
     },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
  },
  mocha: {
    timeout: 300000,
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY
  }
};