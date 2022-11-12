<template>
  <div class="reviewCard">
    <div class="reviewCardTop">
      <n-rate readonly :default-value="props.review.rating"></n-rate>
      <div class="date">
        {{
          new Date(Number(props.review.timestamp))
            .toLocaleString()
            .split(",")[0]
        }}
      </div>
    </div>
    <div class="reviewCardBottom">
      <div class="title">{{ props.review.title }}</div>
      <div class="description">{{ props.review.description }}</div>
      <div class="name">- {{ props.review.name }}</div>
    </div>
  </div>
</template>

<script setup="ts" lang="ts">
const props = defineProps({
  review: { type: Object, required: true },
});
</script>

<style scoped>
.reviewCard {
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #3a73c5;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  width: clamp(200px, calc(75vw), 550px);
}

.reviewCardTop {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.reviewCardBottom {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.title {
  font-weight: bold;
}

.description {
  font-size: 14px;
}

.date,
.name {
  font-size: 12px;
  color: #6e6e6e;
}
</style>
