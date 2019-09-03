<div class="field">
  <label class="label" for="{id}">{label}:</label>
  <div class="control">
    <textarea class="textarea" id="{id}" bind:value={data} use:change={data} placeholder="{placeholder}"></textarea>
  </div>
</div>

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
    }
  }
</script>

<style>
.textarea {
  min-height: 200px;
}
</style>
