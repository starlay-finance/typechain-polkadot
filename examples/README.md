# Examples

This directory contains examples of parsed contracts and pieces of advice how to use the typechain-polkadot in your project.

### General usage
- Create a new project with `npm init`
- Create a new directory for your contracts' abi's (for example /artifacts)
- Add to your package.json file the following and install it with `npm i`:
```json
"dependencies": {
	"@starlay-finance/typechain-polkadot": "0.6.8",
	"@starlay-finance/typechain-types": "^0.0.22",
	"@types/node": "^17.0.34",
	"ts-node": "^10.7.0",
	"typescript": "^4.6.4",
	"@polkadot/api": "^10.8.1",
	"@polkadot/api-contract": "^10.8.1",
	"@types/bn.js": "^5.1.0"
}
```
- Run typechain with
```bash
npx @starlay-finance/typechain-polkadot --in path/to/artifacts --out path/to/output
```

> Note: you should move metadata.json to artifacts directory and rename it to <contract-name>.json, also if you want to deploy the contract you should also move <contract-name>.contract to artifacts directory from your target dir