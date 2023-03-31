import { HardhatUserConfig } from "hardhat/config";
import "hardhat-deploy";
import "@nomicfoundation/hardhat-foundry";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    baobab: {
      url: process.env.BAOBAB_URL || "https://archive-en.baobab.klaytn.net",
      chainId: 1001,
      accounts: [process.env.PRIVATE_KEY as string],
      live: true,
      saveDeployments: true,
    },
    cypress: {
      url: process.env.CYPRESS_URL || "https://archive-en.cypress.klaytn.net",
      chainId: 8217,
      accounts: [process.env.PRIVATE_KEY as string],
      live: true,
      saveDeployments: true,
    },
    local: {
      url: "http://127.0.0.1:8545",
      accounts: [process.env.PRIVATE_KEY as string],
      live: false,
      saveDeployments: true,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
    },
  },
  paths: {
    deployments: "deployments",
  },
};

export default config;
