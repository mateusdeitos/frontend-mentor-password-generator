<script lang="ts">
  import { formStore } from "./store";
  import { generatePassword } from "./generatePassword";

  function onClick() {
    formStore.update((values) => ({
      ...values,
      password: generatePassword(values),
    }));
  }

  $: disabled = Object.entries($formStore)
    .filter(([name, v]) => typeof v === "boolean")
    .map(([, v]) => v)
    .every((value) => value === false);
</script>

<button type="button" {disabled} on:click={onClick}>{"GENERATE ->"}</button>

<style>
  button {
    padding: 20px 0;
    width: 100%;
    background-color: var(--neon-green);
    color: var(--very-dark-grey);
    border: 1px solid var(--neon-green);
    margin-top: 32px;
    cursor: pointer;

    transition: all 0.2s ease-in-out;
  }

  button:disabled {
    filter: brightness(0.5);
    cursor: not-allowed;
  }

  button:hover:not(:disabled) {
    background-color: var(--very-dark-grey);
    color: var(--neon-green);
  }
</style>
