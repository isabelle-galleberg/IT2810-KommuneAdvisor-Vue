import { ref } from "vue";
import { defineStore } from "pinia";

// må støtte ts
export const useSortStore = defineStore("sort", () => {
  const sort = ref("");
  const updateSort = (newSort: string) => {
    sort.value = newSort;
  };
  return { sort, updateSort };
});
