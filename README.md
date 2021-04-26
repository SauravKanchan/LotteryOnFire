# Lottery On Fire

This is a simple BEP-20 token which is similar to ERC-20 token. Deployed this token on Binance Smart Chain(BSC)

In this token certain percentage of transaction is hold by the smart contract for future development.

### Pre Requisites

Before running any command, make sure to install dependencies:

```sh
$ npm i
```

### Compile

Compile the smart contracts with Hardhat:

```sh
$ npm run compile
```

### TypeChain

Compile the smart contracts and generate TypeChain artifacts:

```sh
$ npm run typechain
```

### Lint Solidity

Lint the Solidity code:

```sh
$ npm run lint:sol
```

### Lint TypeScript

Lint the TypeScript code:

```sh
$ npm run lint:ts
```

### Test

Run the Chai tests:

```sh
$ npm run test
```

### Coverage

Generate the code coverage report:

```sh
$ npm run coverage
```

### Report Gas

See the gas usage per unit test and average gas per method call:

```sh
$ REPORT_GAS=true npm run test
```

### Clean

Delete the smart contract artifacts, the coverage reports and the Hardhat cache:

```sh
$ npm run clean
```

## Syntax Highlighting

If you use VSCode, you can enjoy syntax highlighting for your Solidity code via the
[vscode-solidity](https://github.com/juanfranblanco/vscode-solidity) extension. The recommended approach to set the
compiler version is to add the following fields to your VSCode user settings:

```json
{
  "solidity.compileUsingRemoteVersion": "v0.8.3+commit.8d00100c",
  "solidity.defaultCompiler": "remote"
}
```

Where of course `v0.8.3+commit.8d00100c` can be replaced with any other version.
