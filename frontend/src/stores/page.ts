import { ref } from "vue";
import { defineStore } from "pinia";

export const usePageStore = defineStore("page", () => {
  const page = ref(1);
  const updatePage = (newPage: number) => {
    page.value = newPage;
  };
  return { page, updatePage };
});
