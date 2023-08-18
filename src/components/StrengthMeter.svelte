<script lang="ts">
  import { calculateRating } from "./Form/calculateRating";
  import { formStore } from "./store";
  import { fade } from "svelte/transition";

  const ratingLabelMap: Record<Rating, string> = {
    "too-weak": "TOO WEAK!",
    weak: "WEAK",
    medium: "MEDIUM",
    strong: "STRONG",
  };

  $: rating = calculateRating({ ...$formStore });
  $: ratingLabel = ratingLabelMap[rating];

  $: {
    rating;
    animate();
  }

  let unique = {};
  function animate() {
    unique = {};
  }
</script>

<div class="container">
  <span class="label">STRENGTH</span>
  <div class="rating-container">
    <span class="rating-label">
      {ratingLabel}
    </span>
    {#key unique}
      <span in:fade class={`rating-bar ${rating}`} />
      <span in:fade class={`rating-bar ${rating}`} />
      <span in:fade class={`rating-bar ${rating}`} />
      <span in:fade class={`rating-bar ${rating}`} />
    {/key}
  </div>
</div>

<style>
  div.container {
    display: flex;
    flex-direction: row;
    padding: 20px 32px;
    align-items: center;
    justify-content: space-between;
    background-color: var(--very-dark-grey);
    width: 100%;
    margin-top: 32px;
  }

  span.label {
    color: var(--grey);
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  div.rating-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  span.rating-label {
    color: var(--almost-white);
    font-size: 24px;
    margin-right: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  span.rating-bar {
    width: 10px;
    height: 28px;
    flex-shrink: 0;
    border: 1px solid var(--almost-white);
    background-color: var(--very-dark-grey);
  }

  span.rating-bar:not(:last-child) {
    margin-right: 8px;
  }

  span.rating-bar.strong {
    background-color: var(--neon-green);
    border: 1px solid var(--neon-green);
  }

  span.rating-bar.medium:nth-child(-n + 4) {
    background-color: var(--yellow);
    border: 1px solid var(--yellow);
  }

  span.rating-bar.weak:nth-child(-n + 3) {
    background-color: var(--orange);
    border: 1px solid var(--orange);
  }

  span.rating-bar.too-weak:nth-child(-n + 2) {
    background-color: var(--red);
    border: 1px solid var(--red);
  }
</style>
