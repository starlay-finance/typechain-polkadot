<div align="center">
  <a href="https://patron.works/">
    <img src="https://github.com/Brushfam/patron-backend/raw/master/Patron.png" alt="Logo"  >
  </a>

  <p align="left">
    &#128226; &#128226; &#128226; We are thrilled to announce <a href="https://patron.works/">Patron</a>, which brings smart contract verification functionality to the Polkadot ecosystem. &#128226; &#128226; &#128226;
  </p>
</div>

> Smart contract verification ensures the security, reliability, and trustworthiness of dApps and blockchain platforms. With [Patron](https://patron.works/), you can simplify the deployment flow, manage your builds and make the Polkadot ecosystem more secure and transparent.
<br/>
So, in other words,  <a href="https://patron.works/">Patron</a> is an all-in-one contracts platform, which allows you to build and verify ink! smart contracts inside of an isolated environment, explore contract verification details.

![Typechain](https://user-images.githubusercontent.com/88630083/218826097-0d3d4f61-a028-45a9-a91d-1f245c4663ea.png)

![GitHub](https://img.shields.io/github/license/starlay-finance/typechain-polkadot)

If you have any questions regarding Typechain-Polkadot, you can join the [Brushfam Element channel](https://matrix.to/#/!utTuYglskDvqRRMQta:matrix.org?via=matrix.org&via=t2bot.io&via=web3.foundation) to find your answers and meet other ink! smart contracts developers.

### Latest releases:
- Typechain-Polkadot [![npm version](https://badge.fury.io/js/@starlay-finance%2Ftypechain-polkadot.svg)](https://badge.fury.io/js/@starlay-finance%2Ftypechain-polkadot)
- Typechain-Compiler [![npm version](https://badge.fury.io/js/@starlay-finance%2Ftypechain-compiler.svg)](https://badge.fury.io/js/@starlay-finance%2Ftypechain-compiler)
- Typechain-Types [![npm version](https://badge.fury.io/js/@starlay-finance%2Ftypechain-types.svg)](https://badge.fury.io/js/@starlay-finance%2Ftypechain-types)
## Overview :page_facing_up:

Typechain is maintained by [Brushfam](https://www.brushfam.io/) team to improve developers’ experience working with ink! smart contracts.

Nowadays, when technologies are growing faster and faster, we should think about optimizations of different routine processes and making older stuff better. One of these optimizations is to make code typesafe that will be flexible in different situations.

When a smart contract is being written, front-end developer receives file representation of it in the format called Application Binary Interface (ABI). One ABI per each contract, new ABI for every update of a contract.

Information about how to interact with a contract (methods names, arguments & returns types etc.) is included in this ABI file. It is not quite human-readable, so extraction of that information becomes a challenge. We need to have correct type definitions for each contract in TypeScript.

Interaction with blockchain is done with polkadot.js library, which only has abstract definitions for the contract in use, thus users' code cannot be typesafe. And Typechain-Polkadot can change it.

### Installation & import

Install the package as dependency:

```bash
npm i @starlay-finance/typechain-polkadot
```

Pass the folder with artifacts(in the example it is `artifacts`) as input argument
and the output folder(in the example it is `typed_contracts`):
```bash
npx @starlay-finance/typechain-polkadot --in artifacts --out typed_contracts
```

Import the contract what you want to use(in the example it is [`my_psp22`](https://github.com/727-Ventures/openbrush-contracts/tree/main/examples/psp22)):
```typescript
import MyPSP22 from "../typed_contracts/contracts/my_psp22"
```

In the code you can find all available methods and constructors.

Right now, you can't instantiate the contract via typechain(coming soon),
but you can wrap any already deployed contract. If in the code you already
have instantiated `contract` then you can easily wrap it:

```typescript
const typed_contract = new MyPSP22(
    contract.address.toString(),
    signer /* who will sign transactions*/,
    contract.api
);
```

More information you can find in [docs](docs/about.md).

### Usage of Typechain-compiler

```bash
npx typechain-compiler --config config.json
```

Also you can set some additional arguments like `--noCompile`, `--noTypechain`, `--release`

Config interface will be something like this:
```typescript
export interface Config {
    projectFiles: string[]; // Path to all project files, everystring in glob format
    skipLinting : boolean; // Skip linting of project files
    artifactsPath : string; // Path to artifacts folder, where artifacts will be stored it will save both .contract and .json (contract ABI)
    typechainGeneratedPath : string; // Path to typechain generated folder
}
```

### Project Details

Typesafe contracts' descriptions can be generated automatically by a script, taking a list of ABIs as an input, giving usable TS type definitions and even runtime code as its output.

Given, that a front-end developer needs to do this with every contracts update, such tool would save a lot of time and prevent mistakes of misusing smart contracts. It is installed as a package with built-in CLI.

When contracts descriptions come both with ABI and source code (`*.contract` files), our tool will provide means for deployment as well.

Also, Typechain-Polkadot uses awesome tool Handlebars for generating code from templates. It is a very flexible and powerful tool, which allows to generate code from templates with a lot of different logic.
For example, you can generate code for different contracts with different logic, or you can generate code for different methods with different logic.

## Documentation 📚

- [About and mini-guide (recommended)](docs/about.md)
- [Typechain-Polkadot](packages/typechain-polkadot/README.md)
- [Typechain-compiler](packages/typechain-compiler/README.md)
- [Testing](tests/README.md)
- [Examples](examples/README.md)
- [Article 1](https://medium.com/p/7c184067523f)
- [Article 2](https://medium.com/brushfam/ways-how-to-use-typechain-polkadot-in-your-project-281ef80b8dd8)

## Roadmap 🚗

Typechain participates in the Web3 Grants, you can find the roadmap there:
- [Grant I](https://github.com/w3f/Grants-Program/blob/master/applications/typechain-polkadot-follow-up.md)
	- [Delivery milestone 1](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/typechain-polkadot-milestone-1.md#milestone-delivery-mailbox)
	- [Delivery milestone 2](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/typechain-polkadot-milestone-2.md)
	- [Delivery milestone 3](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/typechain-polkadot-follow-up-2.md)
