<script lang="ts">
import { htmlEncode, urlDecode, value } from "../lib/store";
</script>

<div id="options" class="flex flex-row justify-center gap-8">
  <label>
	<input type="checkbox" bind:checked={$htmlEncode} />&nbsp;HTML Entity
	Encode/Decode
  </label>
  <label
	class="tooltip"
	data-tip="Currently only Decoding is supported as Encoding causes too many problems"
	aria-label="Currently only Decoding is supported as Encoding causes too many problems"
  >
		<input type="checkbox" bind:checked={$urlDecode} />&nbsp;URL Encoding Decode
	(?)
	</label>
</div>
