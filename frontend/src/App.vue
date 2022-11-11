<template>
  <Navbar />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import { createApp, provide, h } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { provideApolloClient } from "@vue/apollo-composable";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import Navbar from "@/components/NavigationBar.vue";

// HTTP connection to the API
const httpLink = createHttpLink({
  uri: "http://localhost:8000/graphql",
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

provideApolloClient(apolloClient);

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(RouterView),
});
</script>

<style scoped></style>
