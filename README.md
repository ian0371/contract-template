# Contract-template

## Forge

- compile: `forge build`
- test: `forge test`
- script
  - on-chain simulation: `forge script script/Counter.s.sol --rpc-url local`
  - broadcast: add `--broadcast` flag
- coverage: `forge coverage`

## Hardhat

- compile: `npx hardhat compile`
- test: `npx hardhat test`
- deploy
  - broadcast: `npx hardhat deploy`
- coverage: `npx hardhat coverage`
