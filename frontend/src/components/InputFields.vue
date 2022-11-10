<template>
  <n-space>
    <label>
      Filtrer på fylke
      <n-select
        v-model:value="countyStore.county"
        :options="countyOptions"
        @update:value="changeCounty"
        :clearable="true"
        :show-checkmark="false"
        placeholder=""
      />
    </label>
    <label>
      Sorter
      <n-select
        v-model:value="sortStore.sort"
        :options="sortOptions"
        @update:value="changeSort"
        :clearable="true"
        :show-checkmark="false"
        placeholder=""
      />
    </label>
  </n-space>
</template>

<script setup="ts" lang="ts">
import { useCountyStore } from "@/stores/county";
import { useSortStore } from "@/stores/sort";
import { usePageStore } from "@/stores/page";
import { NSpace, NSelect } from "naive-ui";
import { ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import GET_ALL_COUNTIES from "../services/countyService";

// global states from stores
const countyStore = useCountyStore();
const sortStore = useSortStore();
const pageStore = usePageStore();

// options for county dropdown
const countyOptions = ref([]);

// options for sort dropdown
const sortOptions = [
  { label: "Areal høy-lav", value: "Areal høy-lav" },
  { label: "Areal lav-høy", value: "Areal lav-høy" },
  { label: "Befolkning høy-lav", value: "Befolkning høy-lav" },
  { label: "Befolkning lav-høy", value: "Befolkning lav-høy" },
  { label: "Rangering høy-lav", value: "Rangering høy-lav" },
  { label: "Rangering lav-høy", value: "Rangering lav-høy" },
];

// get all counties sorted alphabetically, with value of countyId
useQuery(GET_ALL_COUNTIES).onResult((res) => {
  countyOptions.value = res.data.counties
    .map((county: { name: string; __typename: string; _id: string }) => {
      return {
        label: county.name,
        value: county._id,
      };
    })
    .sort((a: { label: string }, b: { label: string }) =>
      a.label.localeCompare(b.label)
    );
});

// set page to 1 when county is changed
function changeCounty() {
  pageStore.updatePage(1);
}

// set page to 1 when sort is changed
function changeSort() {
  pageStore.updatePage(1);
}
</script>

<style scoped>
.n-space {
  display: flex;
  flex-direction: row;
  justify-content: center !important;
  padding: 10px 0;
}

@media (max-width: 500px) {
  .n-space {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.n-select {
  width: 200px;
}
label {
  color: black;
}
</style>
