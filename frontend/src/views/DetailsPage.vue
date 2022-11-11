<template>
  <div class="about">
    <AddReview />
  </div>
</template>

<script setup="ts">
import AddReview from "../components/AddReview.vue";
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
