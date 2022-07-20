import {INK_TYPES_TO_TS_ARGUMENTS, INK_TYPES_TO_TS_RETURNS} from "./consts";
import assert from "assert";
import {Abi} from "@polkadot/api-contract";
import {TypeInfo} from "./types/TypeInfo";

export const parsePrimitiveReturns = (primitive: string): string => {
	// @ts-ignore
	return INK_TYPES_TO_TS_RETURNS[primitive];
};

export const parsePrimitiveArgs = (primitive: string): string => {
	// @ts-ignore
	return INK_TYPES_TO_TS_ARGUMENTS[primitive];
};

export const generateInterfaceReturns = (interfaceName: string, argumentNames: string[], argumentTypes: TypeInfo[]) => {
	assert(argumentNames.length == argumentTypes.length);

	return `export type ${interfaceName} = {
\t${argumentNames.map((e, i) => `${e}: ${argumentTypes[i]!.tsReturnType}`).join(',\n\t')}
}`;
};

export const generateInterfaceArgs = (interfaceName: string, argumentNames: string[], argumentTypes: TypeInfo[]) => {
	assert(argumentNames.length == argumentTypes.length);

	return `export type ${interfaceName} = {
\t${argumentNames.map((e, i) => `${e}: ${argumentTypes[i]!.tsArgType}`).join(',\n\t')}
}`;
};

export const generateEnum = (enumName: string, enumFields: string[]): string => {
	return `export enum ${enumName} {
	${enumFields.join(',\n\t')}
}`;
};

export const generateClassEnum = (enumName: string, enumFields: string[], enumValues: string[]): string => {
	assert(enumFields.length == enumValues.length);
	return `export interface ${enumName} {
	${enumFields.map((e, i) => `${e} ? : ${enumValues[i]}`).join(',\n\t')}
}

export class ${enumName}Builder {
	${enumFields.map((e, i) => `static ${e}(${enumValues[i] !== 'null' ? `value: ${enumValues[i]}` : ''}): ${enumName} {
		return {
		${enumValues[i] !== 'null' ? `\t${e}: value` : `\t${e}: null`}
		};
	}`).join('\n\t')}
}`;
};

export function preprocessABI(_abiStr: string): Abi {
	const abiJson = JSON.parse(_abiStr);

	for (const method of abiJson.V3.spec.messages) {
		for (const arg of method.args) {
			for (let i = 0; i < arg.type.displayName.length; i++) {
				arg.type.displayName[i] = `_${arg.type.displayName[i]}`;
			}
		}
	}

	const typeNamesCount = new Map<string, number>();

	for (const {type} of abiJson.V3.types) {
		if (type.path === undefined) continue;
		if (type.path[type.path.length - 1] == 'Mapping') continue;

		if (type.path.length > 0) {
			const value = typeNamesCount.get(type.path[type.path.length - 1]) || 0;
			typeNamesCount.set(
				type.path[type.path.length - 1],
				value + 1
			);
		}
	}

	let __i = 0;
	for (const {type} of abiJson.V3.types) {
		__i++;
		if (type.path === undefined) continue;
		if (type.path[type.path.length - 1] == 'Mapping') continue;

		const count = typeNamesCount.get(type.path[type.path.length - 1]);
		if (type.path.length > 0 && (count ? count : 0) > 1) {
			if (type.path.length > 3) {
				abiJson.V3.types[__i - 1].type.path[type.path.length - 1] = `${type.path[type.path.length - 2]}_${type.path[type.path.length - 1]}`;
			}
		}
	}

	const _abiStrWithUnderscores = JSON.stringify(abiJson, null, 2);

	return new Abi(_abiStrWithUnderscores);
}