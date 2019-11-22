<script>
  import { onMount, onDestroy } from "svelte";
  import { valuesForm } from "./Components/stores.js";
  import Field from "./Components/Field.svelte";

  const fields = [
    {
      type: "text",
      name: "firstname",
      value: "",
      id: "firstname",
      placeholder: "Tap your first name",
      validation: ["required", "min:6"]
    },
    {
      type: "text",
      name: "lastname",
      value: "",
      id: "lastname",
      placeholder: "Tap your lastname"
    }
  ];

  let values;

  function onSubmit(evt) {
    var form = evt.target;
    if (form.checkValidity() === false) {
      console.log("Error");
    } else {
      console.log("values", values);
    }
    // form.classList.add("was-validated");
  }

  onMount(() => {
    // var form = document.getElementsByTagName("form")[0];
    // form.classList.add("was-validated");
    valuesForm.subscribe(data => {
      values = data;
    });
  });

  onDestroy(valuesForm);
</script>

<style>
  .card {
    margin-top: 40px;
    background-color: #fafafa;
    border: solid 1px #e0e2e3;
  }
</style>

<div class="container">
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <form on:submit|preventDefault={onSubmit} novalidate>
            <Field {fields} />
            <button class="btn btn-primary" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
