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

This template ships both foundry-rs and hardhat. They can be installed as follows:

- foundry: Follow instructions in https://getfoundry.sh/
- hardhat: Run `npm install`

### Compile

All contracts in `src/` directory are compiled.

```bash
forge build
# or
npx hardhat compile
```

### Unit test

Files in `test/` directory are run.

```bash
forge test
# or
npx hardhat test
```

### Coverage test

Coverage test is to figure out the coverage of the unit test.

```bash
forge coverage
# or
npx hardhat coverage
```

### Test on local network

There are two types of local network:

- ethereum node (anvil from foundry, hardhat-node from hardhat, or ganache from truffle)
- klaytn node (klaytn-deploy or homi).

These networks are defined in `foundry.toml` and `hardhat.config.ts`.

To spawn a local network with ethereum node:

```bash
anvil
# or
npx hardhat node
```

To spawn a local network with klaytn node: TBU

#### deploy

`hardhat-deploy` is a great tool for managing deployments. Note that it will use the output compiled with hardhat.

To run deploy scripts on the local network:

```bash
npx hardhat deploy --network local
```

It runs scripts in `deploy/` directory and saves the result on `deployments/` directory.

Try running the command again. It will reuse the contracts if previous deployments are found.

By default, this runs all scripts in `deploy/`. To run specific ones, we need to specify "tags" in the deploy script. For example, in case of `deploy/deploy_counter.ts`:

```
func.tags = ["Counter"];
```

Then run:

```bash
npx hardhat deploy --network local --tags Counter
```

#### script

Both foundry and hardhat provides scripting feature. Foundry supports [local/on-chain simulation modes](https://book.getfoundry.sh/tutorials/solidity-scripting#high-level-overview).
Note that `local` does not mean local network by `anvil` or `npx hardhat node`, but a local EVM simulation.

To run the local simulation:

```bash
forge script script/Counter.s.sol
```

Now, let's run on-chain simulation on forked Baobab. Note that it will create a forked Baobab network locally and run transactions there. In other words, it will not send transactions to Baobab.

To run the on-chain simulation:

```bash
forge script script/Counter.s.sol --rpc-url baobab
```

#### Test on Baobab

If all succeeds, you are ready to deploy contracts and send transactions to Baobab:

To deploy:

```bash
export PRIVATE_KEY=0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
hh deploy --network baobab --tags Counter
```

To send transactions:

```bash
export COUNTER=$(cat deployments/baobab/Counter.json | jq -r .address)
forge script script/Counter.s.sol --rpc-url baobab --private-key $PRIVATE_KEY --broadcast
# or
hh run script/counter.ts --network baobab
```

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
