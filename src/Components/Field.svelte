<script>
  import { valuesForm } from "./stores.js";
  import Input from "./Input.svelte";
  import Select from "./Select.svelte";
  import Radio from "./Radio.svelte";

  export let fields = [];
  let values = [];

  function changeValueHander(event) {
    values[`${event.detail.name}`] = event.detail.value;
    valuesForm.set(values);
    console.log("values", values);
  }
</script>

{#each fields as field (field.id)}
  <div class="form-group">
    {#if field.label}
      <label for={field.id}>{field.label}</label>
    {/if}

    {#if field.type == 'text' || field.type == 'password' || field.type == 'email' || field.type == 'number' || field.type == 'tel'}
      <Input
        label={field.label}
        type={field.type}
        id={field.id}
        name={field.name}
        classe={field.class}
        placeholder={field.placeholder}
        min={field.min}
        max={field.max}
        required={field.required}
        disabled={field.disabled}
        value={field.value}
        on:changeValue={changeValueHander} />
    {:else if field.type == 'select'}
      <Select
        label={field.label}
        type={field.type}
        id={field.id}
        name={field.name}
        classe={field.class}
        placeholder={field.placeholder}
        required={field.required}
        disabled={field.disabled}
        options={field.options}
        on:changeValue={changeValueHander} />
    {:else if field.type == 'radio'}
      <Radio
        label={field.label}
        name={field.name}
        radios={field.radios}
        aligne={field.aligne}
        on:changeValue={changeValueHander} />
    {/if}

    {#if field.description}
      <small id={field.id} class="form-text text-muted">
        {field.description}
      </small>
    {/if}
  </div>
{/each}
