<script lang="ts">
  import { formStore } from "../store";
  export let label: string;
  export let id: keyof Omit<PasswordOptions, "length">;

  let checked = $formStore[id];
  function onChange() {
    formStore.update((form) => ({
      ...form,
      [id]: !form[id],
    }));
  }
</script>

<label class="container" for={id}>
  <input type="checkbox" {id} bind:checked on:change={onChange} />
  <span class="checkmark" />
  {label}
</label>

<style>
  .container {
    display: block;
    position: relative;
    padding-left: 45px;
    margin-bottom: 16px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: var(--almost-white);
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    margin-right: 20px;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: var(--neon-green);
  }

  .container input:not(:checked) ~ .checkmark {
    background-color: #000;
    border: 1px solid var(--almost-white);
  }

  .container input:checked ~ .checkmark {
    border: 1px solid var(--neon-green);
    background-color: var(--neon-green);
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .container .checkmark:after {
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid #000;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
</style>
