<script>
import { useQuery } from "@vue/apollo-composable";
import GET_ALL_COUNTIES from "../services/countyService";

export default {
  setup() {
    const { result, loading, error } = useQuery(GET_ALL_COUNTIES);
    return {
      result,
      loading,
      error,
    };
  },
};
</script>

<template>
  <div>
    <div v-if="loading">Loading...</div>

    <div v-else-if="error">Error: {{ error.message }}</div>

    <ul v-else-if="result && result.counties">
      <li v-for="user of result.counties" :key="user._id">
        {{ user.name }}
      </li>
    </ul>
    <el-select v-model="value" class="m-2" placeholder="Select" size="large">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>
