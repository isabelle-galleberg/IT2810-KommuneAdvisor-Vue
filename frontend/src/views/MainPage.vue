<template>
  <el-row :gutter="20">
    <el-col :span="6"
      ><div class="grid-content ep-bg-purple" />
      <KommuneCard
    /></el-col>
    <el-col :span="6"
      ><div class="grid-content ep-bg-purple" />
      <KommuneCard
    /></el-col>
    <el-col :span="6"
      ><div class="grid-content ep-bg-purple" />
      <KommuneCard
    /></el-col>
    <el-col :span="6"
      ><div class="grid-content ep-bg-purple" />
      <KommuneCard
    /></el-col>
  </el-row>
</template>

<script setup lang="ts">
import KommuneCard from "@/components/KommuneCard.vue";
</script>
