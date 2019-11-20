<script>
  import { createEventDispatcher } from "svelte";
  import clsx from "clsx";

  const dispatch = createEventDispatcher();

  export let fields = [];
  const formControlClass = "form-control";

  function onChange() {
    console.log("on change");
    dispatch("onChange", "ok");
  }
</script>

{#each fields as field (field.id)}
  <div class="form-group">
    {#if field.label}
      <label for={field.id}>{field.label}</label>
    {/if}

    {#if field.type == 'text'}
      <input
        type={field.type}
        id={field.id}
        name={field.name}
        on:input={field.value}
        class={clsx(field.class, formControlClass)}
        placeholder={field.placeholder}
        required={field.required}
        disabled={field.disabled}
        on:blur
        on:focus
        on:keydown
        on:keypress
        on:keyup
        on:change={onChange}
        on:input />
    {:else if field.type == 'textarea'}
      <textarea
        id={field.id}
        name={field.name}
        class={clsx(field.class, formControlClass)}
        rows={field.rows ? field.rows : 5}
        cols={field.cols ? field.cols : 10}
        on:blur
        on:focus
        on:keydown
        on:keypress
        on:keyup
        on:change
        on:input>
        {field.placeholder ? field.placeholder : null}
      </textarea>
    {:else if field.type == 'select'}
      <select
        id={field.id}
        name={field.name}
        value={field.value ? field.value : null}
        class={clsx(field.class, formControlClass)}
        on:blur
        on:focus
        on:keydown
        on:keypress
        on:keyup
        on:change
        on:input>
        {#each field.options as option}
          <option>{option.title}</option>
        {:else}
          <option>Any</option>
        {/each}
      </select>
    {:else if field.type == 'radio'}
      {#each field.radios as radio}
        <div
          class={field.aligne === 'inline' ? 'form-check-inline' : 'form-check'}>
          <label class="form-check-label">
            <input
              type="radio"
              class="form-check-input"
              name={field.name}
              value={radio.value}
              on:blur
              on:focus
              on:keydown
              on:keypress
              on:keyup
              on:change
              on:input />
            {radio.title}
          </label>
        </div>
      {/each}
    {/if}

    {#if field.description}
      <small id={field.id} class="form-text text-muted">
        {field.description}
      </small>
    {/if}
  </div>
{/each}
