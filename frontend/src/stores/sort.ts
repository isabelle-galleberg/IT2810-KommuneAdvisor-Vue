import { ref } from "vue";
import { defineStore } from "pinia";

export const useSortStore = defineStore("sort", () => {
  const sort = ref("");
  const updateSort = (newSort: string) => {
    sort.value = newSort;
  };
  return { sort, updateSort };
});
