import { ref } from "vue";
import { defineStore } from "pinia";

// må støtte ts
export const useSearchStore = defineStore("search", () => {
  const search = ref("");
  const updateSearch = (newSearch: string) => {
    search.value = newSearch;
  };
  return { search, updateSearch };
});
