<script lang="ts">
import { htmlEncode, urlDecode, focused, value } from "../lib/store";
import he from "he";

export let label;
export let id;
export let target;
export let placeholder;

$: $value, updatePair($focused);

type Processor<T> = (input: T) => T;

const performOperations = (
	operations: Processor<string>[],
	data: string,
	operation: string,
): string => {
	let input = data;
	operations.forEach((func) => {
		try {
			input = func(input);
			console.log(input, operation);
		} catch (e) {
			console.error(`unable to ${operation} ${data} due to ${e}`);
		}
	});
	return input;
};

const methods = {
	"encode": (value: string) => {
		let op = [];
		if ($htmlEncode) {
			op.push((data: string) =>
				he.encode(data, { useNamedReferences: true }),
			);
		}
		return performOperations(
			op,
			value,
			target,
		);
	},
	"decode": (value: string) => {
		const op = [];
		if ($htmlEncode) op.push(he.decode);
		if ($urlDecode) op.push(decodeURIComponent);
		return performOperations(
			op,
			value,
			target,
		);
	}
}

function updatePair(focused) {
	if (focused !== id) {
		return
	}
	$value[target] = methods[target]($value[id])
}

</script>

<label for={id} class="form-control w-full">
  <div class="label font-bold">{label}:</div>
  <textarea
	class="input input-bordered w-full min-h-52"
	id={id}
	placeholder={placeholder}
	on:focus={() => $focused = id}
	bind:value={$value[id]}
  />
</label>
