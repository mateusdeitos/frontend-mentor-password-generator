<script lang="ts">
  import { MAX_CHAR_LENGTH, MIN_CHAR_LENGTH } from "../../constants";
  import { formStore } from "../store";
  let ref: HTMLInputElement;

  $: {
    if (ref) {
      const value = $formStore.length - MIN_CHAR_LENGTH;
      ref.style.setProperty("--value", value.toString());
      ref.style.setProperty(
        "--max",
        (MAX_CHAR_LENGTH - MIN_CHAR_LENGTH).toString()
      );
    }
  }
</script>

<label for="char-length"
  >Character Length <p>{$formStore.length}</p></label
>
<input
  bind:this={ref}
  type="range"
  id="char-length"
  bind:value={$formStore.length}
  min={MIN_CHAR_LENGTH}
  max={MAX_CHAR_LENGTH}
/>

<style>
  label {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    color: var(--almost-white);
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  p {
    margin: 0;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: var(--neon-green);
  }

  input[type="range"] {
    margin: 0;
    padding: 0;
    width: 100%;
    -webkit-appearance: none;
    background-color: #000;
    color: #000;
    height: 8px;
    accent-color: var(--neon-green);
  }

  /* 
   * this is a hack to fill the track until it reaches the slider thumb 
   * it works because we are setting this variables in svelte when the value of the input changes
   */
  input[type="range"]::-webkit-slider-runnable-track {
    height: 8px;
    background: linear-gradient(
      to right,
      var(--neon-green) calc(100% * var(--value) / var(--max)),
      var(--very-dark-grey) calc(100% * var(--value) / var(--max))
    );
  }

  input[type="range"]::-webkit-slider-thumb {
    appearance: none;
    width: 28px;
    height: 28px;
    margin-top: -10px;
    border-radius: 50%;
    background-color: var(--almost-white);
    border: 1px solid var(--almost-white);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  input[type="range"]::-webkit-slider-thumb:hover {
    background-color: var(--very-dark-grey);
    border: 1px solid var(--neon-green);
  }
</style>
