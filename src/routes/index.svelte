<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import he from 'he';

	import About from '$lib/About.svelte';
	import Field from '$lib/Field.svelte';
	import Footer from '$lib/Footer.svelte';

	export let encoded = '';
	export let decoded = '';
	export let htmlEntity = true;
	export let urlEncoding = true;

	function encode(event) {
		let data = event.detail;
		if (htmlEntity) {
			try {
				data = he.encode(data);
			} catch (e) {
				// do nothing
			}
		}
		encoded = data;
	}

	function decode(event) {
		let data = event.detail;
		if (htmlEntity) {
			try {
				data = he.decode(data);
			} catch (e) {
				// do nothing
			}
		}
		if (urlEncoding) {
			try {
				data = decodeURIComponent(data);
			} catch (e) {
				// do nothing
			}
		}
		decoded = data;
	}
</script>

<section class="section">
	<div class="container">
		<h2 class="title has-text-centered"><strong>Entity</strong>Decode</h2>
		<About />
		<div id="options" class="row has-text-centered">
			<label class="column">
				<input type="checkbox" bind:checked={htmlEntity} />
				HTML Entity Encode/Decode
			</label>
			<label
				class="column"
				title="Currently only Decoding is supported as Encoding causes too many problems"
			>
				<input type="checkbox" bind:checked={urlEncoding} />
				URL Encoding Decode (?)
			</label>
		</div>
		<Field
			on:data-change={decode}
			id="encode"
			bind:data={encoded}
			label="Encoded"
			placeholder="e.g. &amp;raquo;"
		/>
		<Field
			on:data-change={encode}
			id="decode"
			bind:data={decoded}
			label="Decoded"
			placeholder="e.g. &raquo;"
		/>
	</div>
</section>
<Footer />

<style global lang="scss">
	@import 'milligram/src/Color';

	$color-primary: #3273dc;

	@import 'milligram/src/Base';
	@import 'milligram/src/Typography';
	@import 'milligram/src/Grid';
	@import 'milligram/src/Button';
	@import 'milligram/src/Form';
	@import 'milligram/src/Divider';
	@import 'milligram/src/Utility';

	body {
		padding-top: 2rem;
	}

	.has-text-centered {
		text-align: center;
	}
	.has-text-right {
		text-align: right;
	}

	.has-text-left {
		text-align: left;
	}

	a {
		color: $color-primary;
		text-decoration: none;
	}
</style>
