<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <div class="kommuneInput">
      <label
        >Søk etter en kommune
        <n-input
          v-model:value="searchStore.search"
          type="text"
          @update:value="changeSearch"
          placeholder=""
        />
      </label>
      <search-icon size="18" class="searchIcon" />
      <InputFields />
    </div>
    <div v-if="loading">
      <div class="spinnerContainer">
        <Spinner :active="loading" />
      </div>
    </div>
    <div v-else-if="error">Kommuner ikke funnet</div>
    <div v-else-if="result && result.kommuner">
      <n-grid y-gap="10" cols="1 550:2 830:3 1100:4">
        <n-gi v-for="kommune of result.kommuner" :key="kommune._id">
          <KommuneCard
            :id="kommune._id"
            :name="kommune.name"
            :county="kommune.county.name"
            :weaponImg="kommune.logoUrl"
            :rating="kommune.averageRating"
          />
        </n-gi>
      </n-grid>
      <n-pagination v-model:page="pageStore.page" :page-count="totalKommuner" />
    </div>
  </n-config-provider>
</template>

<script setup="ts" lang="ts">
import { useQuery } from "@vue/apollo-composable";
import kommuneService from "../services/kommuneService";
import KommuneCard from "../components/KommuneCard.vue";
import InputFields from "../components/InputFields.vue";
import Spinner from "../components/Spinner.vue";
import { ref, watchEffect } from "vue";
import { NConfigProvider } from "naive-ui";
import { useSearchStore } from "@/stores/search";
import { useCountyStore } from "@/stores/county";
import { useSortStore } from "@/stores/sort";
import { usePageStore } from "@/stores/page";

// global states from stores
const searchStore = useSearchStore();
const countyStore = useCountyStore();
const sortStore = useSortStore();
const pageStore = usePageStore();

const totalKommuner = ref(1);
const sortBy = ref("name");
const sortDirection = ref("ascending");

// get all kommuner
const { result, loading, error } = useQuery(
  kommuneService.GET_ALL_KOMMUNER,
  () => ({
    sortBy: sortBy.value,
    sortDirection: sortDirection.value,
    pageSize: 24,
    page: pageStore.page,
    county: countyStore.county,
    search: searchStore.search,
  })
);

// get number of kommuner
useQuery(kommuneService.GET_KOMMUNER_COUNT, () => ({
  county: countyStore.county,
  search: searchStore.search,
})).onResult((res) => {
  totalKommuner.value = Math.ceil(res.data.kommunerCount / 24);
});

// set page to 1 when search is changed
function changeSearch() {
  pageStore.updatePage(1);
}

// sort kommuner based on dropdown value
const sortKommuner = () => {
  switch (sortStore.sort) {
    case "Befolkning høy-lav":
      sortBy.value = "population";
      sortDirection.value = "descending";
      break;
    case "Befolkning lav-høy":
      sortBy.value = "population";
      sortDirection.value = "ascending";
      break;
    case "Areal høy-lav":
      sortBy.value = "area";
      sortDirection.value = "descending";
      break;
    case "Areal lav-høy":
      sortBy.value = "area";
      sortDirection.value = "ascending";
      break;
    case "Rangering høy-lav":
      sortBy.value = "rating";
      sortDirection.value = "descending";
      break;
    case "Rangering lav-høy":
      sortBy.value = "rating";
      sortDirection.value = "ascending";
      break;
    default:
      sortBy.value = "name";
      sortDirection.value = "ascending";
  }
};

watchEffect(() => {
  sortKommuner();
});

// override theme from Naive UI
const themeOverrides = {
  common: {
    primaryColor: "#405a7e",
    primaryColorHover: "#405a7e",
  },
};
</script>

<style scoped>
.kommuneInput {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.n-input {
  width: 200px;
  display: block;
}
.n-pagination {
  display: flex;
  justify-content: center;
  margin-top: 25px;
}
.searchIcon {
  position: absolute;
  margin-left: 170px;
  margin-top: 32px;
  color: #405a7e;
}
label {
  color: black;
  display: block;
}

.spinnerContainer {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
</style>
