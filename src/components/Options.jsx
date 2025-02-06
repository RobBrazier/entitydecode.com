import { useStore } from "@nanostores/solid"
import { htmlEncode, urlDecode } from "../lib/store"

export default function Options() {
	const $htmlEncode = useStore(htmlEncode);
	const $urlDecode = useStore(urlDecode);
	return (
		<div id="options" class="flex flex-row justify-center gap-8">
			<label>
				<input type="checkbox" checked={$htmlEncode()} onClick={() => htmlEncode.set(!$htmlEncode())} />&nbsp;HTML Entity
				Encode/Decode
			</label>
			<label
				class="tooltip"
				data-tip="Currently only Decoding is supported as Encoding causes too many problems"
				aria-label="Currently only Decoding is supported as Encoding causes too many problems"
			>
				<input type="checkbox" checked={$urlDecode()} onClick={() => urlDecode.set(!$urlDecode())} />&nbsp;URL Encoding Decode
				(?)
			</label>
		</div>
	)
}
