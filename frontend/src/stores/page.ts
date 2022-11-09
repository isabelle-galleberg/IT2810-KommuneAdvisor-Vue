import { ref } from "vue";
import { defineStore } from "pinia";

// må støtte ts
export const usePageStore = defineStore("page", () => {
  const page = ref(1);
  const updatePage = (newPage: number) => {
    page.value = newPage;
  };
  return { page, updatePage };
});
