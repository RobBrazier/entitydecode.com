<script>
	import { createEventDispatcher } from 'svelte';

	export let id = null;
	export let label = null;
	export let placeholder = null;
	export let data = '';

	const dispatch = createEventDispatcher();

	function change() {
		return {
			update(data) {
				dispatch('data-change', data);
			}
		};
	}
</script>

<div class="field">
	<label class="label" for={id}>{label}:</label>
	<div class="control">
		<textarea class="textarea" {id} bind:value={data} use:change={data} {placeholder} />
	</div>
</div>

<style>
	.textarea {
		min-height: 200px;
	}
</style>
