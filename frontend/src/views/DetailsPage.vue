<template>
  <div class="about">
    <KommuneDetails />
  </div>
</template>

<script setup="ts" lang="ts">
import KommuneDetails from "../components/KommuneDetails.vue";
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
</style>
