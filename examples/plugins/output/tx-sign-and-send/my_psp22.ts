/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@starlay-finance/typechain-types';
import { txSignAndSend } from '@starlay-finance/typechain-types';
import type * as ArgumentTypes from '../types-arguments/my_psp22';
import type BN from 'bn.js';
// @ts-ignore
import type { EventRecord } from "@polkadot/api/submittable";
import { decodeEvents } from "../shared/utils";


export default class Methods {
	private __nativeContract: ContractPromise;
	private __keyringPair: KeyringPair;
	private __apiPromise: ApiPromise;

	constructor(
		apiPromise: ApiPromise,
		nativeContract: ContractPromise,
		keyringPair: KeyringPair,
	) {
		this.__apiPromise = apiPromise;
		this.__nativeContract = nativeContract;
		this.__keyringPair = keyringPair;
	}

	/**
	* mintTo
	*
	* @param { ArgumentTypes.AccountId } account,
	* @param { (string | number | BN) } amount,
	*/
	"mintTo"(
		account: ArgumentTypes.AccountId,
		amount: (string | number | BN),
		__options?: GasLimit,
	) {
		return txSignAndSend(this.__apiPromise, this.__nativeContract, this.__keyringPair, "mintTo", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "my_psp22");
		}, [account, amount], __options);
	}

	/**
	* transferFrom
	*
	* @param { ArgumentTypes.AccountId } from,
	* @param { ArgumentTypes.AccountId } to,
	* @param { (string | number | BN) } value,
	* @param { Array<(number | string | BN)> } data,
	*/
	"transferFrom"(
		from: ArgumentTypes.AccountId,
		to: ArgumentTypes.AccountId,
		value: (string | number | BN),
		data: Array<(number | string | BN)>,
		__options?: GasLimit,
	) {
		return txSignAndSend(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp22::transferFrom", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "my_psp22");
		}, [from, to, value, data], __options);
	}

	/**
	* decreaseAllowance
	*
	* @param { ArgumentTypes.AccountId } spender,
	* @param { (string | number | BN) } deltaValue,
	*/
	"decreaseAllowance"(
		spender: ArgumentTypes.AccountId,
		deltaValue: (string | number | BN),
		__options?: GasLimit,
	) {
		return txSignAndSend(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp22::decreaseAllowance", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "my_psp22");
		}, [spender, deltaValue], __options);
	}

	/**
	* balanceOf
	*
	* @param { ArgumentTypes.AccountId } owner,
	*/
	"balanceOf"(
		owner: ArgumentTypes.AccountId,
		__options?: GasLimit,
	) {
		return txSignAndSend(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp22::balanceOf", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "my_psp22");
		}, [owner], __options);
	}

	/**
	* totalSupply
	*
	*/
	"totalSupply"(
		__options?: GasLimit,
	) {
		return txSignAndSend(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp22::totalSupply", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "my_psp22");
		}, [], __options);
	}

	/**
	* approve
	*
	* @param { ArgumentTypes.AccountId } spender,
	* @param { (string | number | BN) } value,
	*/
	"approve"(
		spender: ArgumentTypes.AccountId,
		value: (string | number | BN),
		__options?: GasLimit,
	) {
		return txSignAndSend(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp22::approve", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "my_psp22");
		}, [spender, value], __options);
	}

	/**
	* increaseAllowance
	*
	* @param { ArgumentTypes.AccountId } spender,
	* @param { (string | number | BN) } deltaValue,
	*/
	"increaseAllowance"(
		spender: ArgumentTypes.AccountId,
		deltaValue: (string | number | BN),
		__options?: GasLimit,
	) {
		return txSignAndSend(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp22::increaseAllowance", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "my_psp22");
		}, [spender, deltaValue], __options);
	}

	/**
	* allowance
	*
	* @param { ArgumentTypes.AccountId } owner,
	* @param { ArgumentTypes.AccountId } spender,
	*/
	"allowance"(
		owner: ArgumentTypes.AccountId,
		spender: ArgumentTypes.AccountId,
		__options?: GasLimit,
	) {
		return txSignAndSend(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp22::allowance", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "my_psp22");
		}, [owner, spender], __options);
	}

	/**
	* transfer
	*
	* @param { ArgumentTypes.AccountId } to,
	* @param { (string | number | BN) } value,
	* @param { Array<(number | string | BN)> } data,
	*/
	"transfer"(
		to: ArgumentTypes.AccountId,
		value: (string | number | BN),
		data: Array<(number | string | BN)>,
		__options?: GasLimit,
	) {
		return txSignAndSend(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp22::transfer", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "my_psp22");
		}, [to, value, data], __options);
	}

	/**
	* mint
	*
	* @param { ArgumentTypes.AccountId } account,
	* @param { (string | number | BN) } amount,
	*/
	"mint"(
		account: ArgumentTypes.AccountId,
		amount: (string | number | BN),
		__options?: GasLimit,
	) {
		return txSignAndSend(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp22Mintable::mint", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "my_psp22");
		}, [account, amount], __options);
	}

}