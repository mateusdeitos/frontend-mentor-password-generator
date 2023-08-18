<script>
  import CharacterLengthInput from "./CharacterLengthInput.svelte";
  import Checkbox from "./Checkbox.svelte";
</script>

<fieldset>
  <CharacterLengthInput />
</fieldset>
<fieldset class="options">
  <Checkbox label="Include Uppercase Letters" id="uppercase" />
  <Checkbox label="Include Lowercase Letters" id="lowercase" />
  <Checkbox label="Include Numbers" id="numbers" />
  <Checkbox label="Include Symbols" id="symbols" />
</fieldset>

<style>
  fieldset {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 8px;
    width: 100%;
    border: none;
    margin: 0;
    padding: 0;
  }

  fieldset.options {
    margin-top: 42px;
  }
</style>
