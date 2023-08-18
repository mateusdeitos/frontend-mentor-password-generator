<script lang="ts">
  import Form from "./components/Form/Form.svelte";
  import StrengthMeter from "./components/StrengthMeter.svelte";
  import PasswordOutput from "./components/PasswordOutput.svelte";
  import GeneratePasswordButton from "./components/GeneratePasswordButton.svelte";
</script>

<main>
  <h3>Password Generator</h3>
  <PasswordOutput />
  <section>
    <Form />
    <StrengthMeter />
    <GeneratePasswordButton />
  </section>
</main>

<style>
  :global(*) {
    font-family: "JetBrains Mono";
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    gap: 24px;
    max-width: 540px;
    padding: 64px 16px;
    margin: 0 auto;
  }

  h3 {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: var(--grey);
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: var(--dark-grey);
    padding: 32px;
  }
</style>
