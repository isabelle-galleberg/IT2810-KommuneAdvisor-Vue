<template>
  <!-- <n-card>
    <template #cover>
      <img :src="props.weaponImg" />
    </template>
    <div>
      {{ props.name }}
      <div>{{ props.county }}</div>
    </div>
  </n-card> -->

  <n-card hoverable>
    <div class="cardContent">
      <img :src="props.weaponImg" />
      <div class="kommuneInfo">
        <div class="kommuneName">{{ props.name }}</div>
        <div class="kommuneCounty">📍{{ props.county }}</div>
        <RouterLink to="/details">
          <n-button strong secondary type="info"> Vis mer </n-button>
        </RouterLink>
      </div>
    </div>
  </n-card>
</template>

<script setup="ts">
const props = defineProps({
  id: { type: Number },
  name: { type: String, required: true },
  county: { type: String, required: true },
  weaponImg: { type: String },
  rating: { type: Number },
});
</script>

<style scoped>
img {
  width: 60px;
}
.n-card {
  width: 265px;
  height: 150px;
}
.cardContent {
  height: 110px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
}

.kommuneInfo {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: 100%;
}

.kommuneName {
  font-size: 16px;
  font-weight: 600;
}

.kommuneCounty {
  font-size: 14px;
  color: grey;
}
</style>
