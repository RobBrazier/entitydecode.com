import { useStore } from "@nanostores/solid";
import he from "he";
import { createEffect, untrack } from "solid-js";
import { focused, htmlEncode, urlDecode, value } from "../lib/store";

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
      [$htmlEncode, (data) => he.encode(data, { useNamedReferences: true })],
    ],
    decode: [
      [$htmlEncode, he.decode],
      [$urlDecode, decodeURIComponent],
    ],
  };

  /** @param {string} method */
  function getOps(method) {
    return (
      operationConfig[method]
        ?.filter(([check]) => check())
        .map(([, op]) => op) ?? []
    );
  }

  function updateValue(key, event) {
    const val = event.target?.value;
    if (val !== undefined) {
      value.setKey(key, val);
    }
  }

  createEffect(() => {
    const val = $value()[id];
    const focus = $focused();
    $htmlEncode();
    $urlDecode();
    if (focus === id) {
      const ops = getOps(target);
      untrack(() => value.setKey(target, performOperations(ops, val, target)));
    }
  });

  return (
    <label for={id} class="w-full py-2 flex flex-col gap-2">
      <div class="font-bold">{label}:</div>
      <textarea
        class="flex min-h-[13rem] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        id={id}
        placeholder={placeholder}
        onFocus={() => focused.set(id)}
        value={$value()[id]}
        onInput={(val) => updateValue(id, val)}
      />
    </label>
  );
}
