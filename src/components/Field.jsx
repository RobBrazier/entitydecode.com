import { useStore } from "@nanostores/solid"
import { focused, htmlEncode, urlDecode, value } from "../lib/store"
import { createEffect, untrack } from "solid-js";
import he from "he";

/**
 * @typedef {(input: string) => string} Processor
 */

/**
 * @param {Processor[]} operations
 * @param {string} data
 * @param {string} operation
 * @returns {string}
 */
const performOperations = (operations, data, operation) => {
	let input = data;
	operations.forEach((func) => {
		try {
			input = func(input);
		} catch (e) {
			console.error(`unable to ${operation} ${data} due to ${e}`);
		}
	});
	return input;
};


/**
 * @param {{label: string, placeholder: string, id: string, target: string}} props
 */
export default function Field(props) {
	const { label, placeholder, id, target } = props;
	const $htmlEncode = useStore(htmlEncode);
	const $urlDecode = useStore(urlDecode);
	const $focused = useStore(focused);
	const $value = useStore(value);


	const operationConfig = {
		encode: [
			[$htmlEncode, data => he.encode(data, { useNamedReferences: true })]
		],
		decode: [
			[$htmlEncode, he.decode],
			[$urlDecode, decodeURIComponent]
		]
	};

	/** @param {string} method */
	function getOps(method) {
		return operationConfig[method]
			?.filter(([check]) => check())
			.map(([, op]) => op) ?? [];
	}

	function updateValue(key, event) {
		const val = event.target?.value
		if (val !== undefined) {
			value.setKey(key, val)
		}
	}

	createEffect(() => {
		const val = $value()[id]
		const focus = $focused()
		$htmlEncode();
		$urlDecode();
		if (focus === id) {
			const ops = getOps(target)
			untrack(() => value.setKey(target, performOperations(ops, val, target)))
		}
	})

	return (
		<label for={id} class="form-control w-full">
			<div class="label font-bold">{label}:</div>
			<textarea
				class="input input-bordered w-full min-h-52"
				id={id}
				placeholder={placeholder}
				onFocus={() => focused.set(id)}
				value={$value()[id]}
				onInput={(val) => updateValue(id, val)}
			/>
		</label>
	)
}
