import { TypechainPlugin } from '@starlay-finance/typechain-polkadot/src/types/interfaces';
import { Abi } from "@polkadot/api-contract";

export default class HelloWorldPlugin implements TypechainPlugin {

	name: string = 'HelloWorld';
	outputDir: string = 'HelloWorldDirectory';

	generate(abi: Abi, fileName: string, absPathToABIs: string, absPathToOutput: string): void {
		console.log('Hello World! [run called]');
	}

	beforeRun(
		absPathToABIs: string,
		absPathToOutput: string
	): void {
		console.log('Hello World! [beforeRun called]');
	}
}