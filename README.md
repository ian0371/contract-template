# Contract-template

This template provides a template for contract development and operation, including tools and conventions.
These are recommended and not mendatory.
If you have a suggestion, please make a PR to the template.

This template ships the following tools:

- git hooks: husky
- linter
  - prettier (for `*.markdown`, `*.ts`)
  - forge fmt (for `*.sol`)
- solidity framework: foundry-rs, hardhat

## Git hooks

run linters if relevant files changed

## linter

`.prettier.json`

## Solidity frameworks

This template ships both foundry-rs and hardhat. Each has its own strength and complements each other.

### Compile

`forge build` will compile all contracts in `src` directory. Hardhat-equivalent is `npx hardhat compile`.

### Unit test

`forge test` will run all `test*` functions in `test` directory. Hardhat-equivalent is `npx hardhat test`.

### Coverage test

`forge coverage` will run coverage test based on unit tests in all directories. Hardhat-equivalent is `npx hardhat coverage`.

### Test on local network

There are two types of local network:

- ethereum node (anvil from foundry, hardhat-node from hardhat, or ganache from truffle)
- klaytn node (klaytn-deploy or homi).

These are defined in `foundry.toml` and `hardhat.config.ts`

#### deploy

`deploy` dir: hardhat-deploy

hardhat.config.ts: namedAccounts

#### script

On-chain simul

hardhat script

#### interact

## Guide for development

### Development

provide hardhat-utils

## Guide for operation

### Deployment

based on purpose (baobab-qa, ...)
hardhat-deploy

### Verification

sourcify
use hardhat-utils
