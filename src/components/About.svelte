<div id="about">
  <div class="column has-text-centered">
    <button class:is-active={active} class="button-about" on:click={toggle}>About</button>
  </div>
  {#if active}
    <div transition:slide id="about-contents">
      <p><strong>Entity</strong>Decode is a tool to change any escaped characters, such as %24 in URLs, and HTML entities such as &amp;raquo; into their proper characters (you can try both of those down below if you want!).</p>
      <p>You can use this to decode any HTML Entities, or URL Encodings, and make them more readable, by pasting/typing it into the
          <label for="encode" class="label is-inline">Encoded</label> Textbox.</p>
      <p>It also works the other way, you can paste/type anything you want to convert into an HTML Entity into the
          <label for="decode" class="label is-inline">Decoded</label> Textbox.</p>
      <p>If you have no idea what I'm on about, with <a href="https://en.wikipedia.org/wiki/Character_encodings_in_HTML#Character_references">HTML Entities</a> and <a href="https://en.wikipedia.org/wiki/Percent-encoding">URL Encodings</a>, click the respective links to view more information about them.</p>
      <hr />
    </div>
  {/if}
</div>

<script>  
import { slide } from 'svelte/transition';

export let active = false;

export function toggle() {
  active = !active;
}
</script>

<style lang="scss">
  #about {
    margin-bottom: 1.5rem;
  }

  .button-about {
    background-color: white;
    color: inherit;
    border-color: transparent;
    &:hover {
      border-bottom-color: inherit;
    }
  }

  .label.is-inline {
    display: inline;
  }
</style>
