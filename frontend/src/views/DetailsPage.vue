<template>
  <div class="about">
    <KommuneDetails />
  </div>
</template>

<script setup="ts" lang="ts">
import { onMounted } from "vue";
import KommuneDetails from "../components/KommuneDetails.vue";

// scroll to top of page
onMounted(() => {
  window.scrollTo(0, 0);
});
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
