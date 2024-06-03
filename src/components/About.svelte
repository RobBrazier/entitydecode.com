<script lang="ts">
import { slide } from "svelte/transition";
let open = false;
</script>

<button class="btn btn-ghost mx-auto block" on:click={() => open = !open}>About</button>
{#if open}
<div class="space-y-2" transition:slide>
  <p>
    <strong>Entity</strong>Decode is a tool to change any escaped characters,
    such as <code>%24</code> in URLs, and HTML entities such as <code
      >&amp;raquo;</code
    > into their proper characters (you can try both of those down below if you want!).
  </p>
  <p>
    You can use this to decode any HTML Entities, or URL Encodings, and make
    them more readable, by pasting/typing it into the <label
      for="encode"
      class="label inline link">Encoded</label
    > Textbox.
  </p>
  <p>
    It also works the other way, you can paste/type anything you want to convert
    into an HTML Entity into the <label for="decode" class="label inline link"
      >Decoded</label
    > Textbox.
  </p>
  <p>
    If you have no idea what I'm on about, with
    <a
      target="_blank"
      class="link link-primary"
      href="https://en.wikipedia.org/wiki/Character_encodings_in_HTML#Character_references"
      >HTML Entities</a
    >
    and <a
      target="_blank"
      class="link link-primary"
      href="https://en.wikipedia.org/wiki/Percent-encoding">URL Encodings</a
    >, click the respective links to view more information about them.
  </p>
</div>
{/if}
