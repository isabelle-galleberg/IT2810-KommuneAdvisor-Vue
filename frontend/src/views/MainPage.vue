<script setup="ts">
import { useQuery } from "@vue/apollo-composable";
import kommuneService from "../services/kommuneService";
import KommuneCard from "../components/KommuneCard.vue";

// pagesize funker ikke?
const { result, loading, error } = useQuery(kommuneService.GET_ALL_KOMMUNER, {
  variables: {
    pageSize: 1,
  },
});
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">Error: {{ error.message }}</div>
  <div v-else-if="result && result.kommuner" :class="mainPage">
    <n-grid x-gap="10" y-gap="10" cols="1 550:2 830:3 1100:4">
      <n-gi v-for="kommune of result.kommuner" :key="kommune._id">
        <KommuneCard
          :name="kommune.name"
          :county="kommune.county.name"
          :weaponImg="kommune.logoUrl"
        />
      </n-gi>
    </n-grid>
  </div>
</template>

<style>
.n-gi {
  display: flex;
  justify-content: center;
  align-items: center;
}
.mainPage {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
