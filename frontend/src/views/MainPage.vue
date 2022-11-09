<template>
  <div v-if="loading || loadingCount">Loading...</div>
  <div v-else-if="error || errorCount">Kommuner ikke funnet</div>
  <div v-else-if="result && result.kommuner" class="mainPage">
    <n-grid y-gap="10" cols="1 550:2 830:3 1100:4">
      <n-gi v-for="kommune of result.kommuner" :key="kommune._id">
        <KommuneCard
          :name="kommune.name"
          :county="kommune.county.name"
          :weaponImg="kommune.logoUrl"
        />
      </n-gi>
    </n-grid>
    <n-pagination
      v-model:page="currPage"
      :page-count="totalKommuner"
      class="pagination"
    />
  </div>
</template>

<script setup="ts">
import { useQuery } from "@vue/apollo-composable";
import kommuneService from "../services/kommuneService";
import KommuneCard from "../components/KommuneCard.vue";
import { ref } from "vue";

const currPage = ref(1);
const totalKommuner = ref(1);

// get all kommuner from GraphQL
const { result, loading, error } = useQuery(
  kommuneService.GET_ALL_KOMMUNER,
  () => ({
    sortBy: "name",
    sortDirection: "ascending",
    pageSize: 24,
    page: currPage.value,
  })
);

// county and search will be replaced with global states
// resultCount will be updated when input fields are changed
// get number of kommuner from GraphQL
const {
  result: resultCount,
  loading: loadingCount,
  error: errorCount,
} = useQuery(kommuneService.GET_KOMMUNER_COUNT, () => ({
  // county: county,
  // search: search
})).onResult((res) => {
  totalKommuner.value = Math.ceil(res.data.kommunerCount / 24);
});
</script>

<style scoped>
.mainPage {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
</style>
