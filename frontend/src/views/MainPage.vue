<script>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export default {
  setup() {
    const { result, loading, error } = useQuery(gql`
      query getCounties {
        counties {
          _id
          name
        }
      }
    `);

    return {
      result,
      loading,
      error,
    };
  },
};
</script>

<template>
  <div v-if="loading">Loading...</div>

  <div v-else-if="error">Error: {{ error.message }}</div>

  <ul v-else-if="result && result.counties">
    <li v-for="user of result.counties" :key="user._id">
      {{ user.name }}
    </li>
  </ul>
</template>
