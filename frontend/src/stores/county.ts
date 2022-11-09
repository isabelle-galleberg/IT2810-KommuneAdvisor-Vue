import { ref } from "vue";
import { defineStore } from "pinia";

// må støtte ts
export const useCountyStore = defineStore("county", () => {
  const county = ref("");
  const updateCounty = (newCounty: string) => {
    county.value = newCounty;
  };
  return { county, updateCounty };
});
