<script setup="ts">
import { useQuery } from "@vue/apollo-composable";
import GET_ALL_COUNTIES from "../services/countyService";

// Example of how to fetch data from the backend
const { result, loading, error } = useQuery(GET_ALL_COUNTIES);
</script>

<template>
  <div>MainPage</div>
</template>
