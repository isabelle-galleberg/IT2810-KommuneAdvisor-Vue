import { ref } from "vue";
import { defineStore } from "pinia";

export const useSearchStore = defineStore("search", () => {
  const search = ref("");
  const updateSearch = (newSearch: string) => {
    search.value = newSearch;
  };
  return { search, updateSearch };
});
