import { HardhatUserConfig } from "hardhat/config";
import "hardhat-deploy";
import "@nomicfoundation/hardhat-foundry";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    baobab: {
      url: process.env.BAOBAB_URL || "https://archive-en.baobab.klaytn.net",
      chainId: 1001,
    },
    cypress: {
      url: process.env.CYPRESS_URL || "https://archive-en.cypress.klaytn.net",
      chainId: 8217,
    },
    local: {
      url: "http://127.0.0.1:8545",
    },
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
    },
  },
};

export default config;
