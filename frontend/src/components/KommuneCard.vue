<template>
  <n-card hoverable>
    <div class="cardContent">
      <img :src="props.weaponImg" />
      <div class="kommuneInfo">
        <div class="kommuneName">{{ props.name }}</div>
        <div class="kommuneCounty">📍{{ props.county }}</div>
        <RouterLink to="/details">
          <n-button strong secondary type="info">Vis mer</n-button>
        </RouterLink>
      </div>
      <div v-if="props.rating || props.rating === 0" class="kommuneRating">
        ({{ props.rating != 0 ? props.rating.toFixed(2) : "-" }})
      </div>
    </div>
  </n-card>
</template>

<script setup="ts" lang="ts">
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
  margin: 0 auto;
}

.n-button,
a {
  width: 80px;
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
  height: 100%;
}

.kommuneName {
  font-size: 16px;
  font-weight: 600;
}

.kommuneCounty {
  font-size: 14px;
  color: grey;
  white-space: nowrap;
}

.kommuneRating {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: -10px;
  right: -10px;
  color: darkgray;
  font-size: small;
}
</style>
