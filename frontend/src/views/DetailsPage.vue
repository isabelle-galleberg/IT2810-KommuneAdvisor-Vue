<template>
  <div class="about">
    <KommuneDetails />
    <AddReview />
  </div>
</template>

<script setup="ts" lang="ts">
import KommuneDetails from "@/components/KommuneDetails.vue";

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
