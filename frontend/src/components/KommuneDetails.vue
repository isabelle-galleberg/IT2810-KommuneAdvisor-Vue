<template>
    <h1>Hei</h1>
  <div class="detailsPage">
    <div class="detailsPageTop">
      <h1 data-cy="kommune-name">{{ result.kommune.name }}</h1>
    </div>
    <div class="line"></div>
    <div class="kommuneDetails">
      <div>
        <div class="rating">
          <div data-cy="kommune-rating" class="averageRating">
            {{
              result.kommune.averageRating != 0
                ? "(" + result.kommune.averageRating.toFixed(2) + ")"
                : "(Ingen vurderinger)"
            }}
          </div>
        </div>
        <label>📍 Fylke</label>
        <p data-cy="kommune-county">{{ result.kommune.county.name }}</p>
        <label>👨‍👩‍👧‍👧 Innbyggertall</label>
        <p data-cy="kommune-population">{{ result.kommune.population }}</p>
        <label>🏔 Areal</label>
        <p data-cy="kommune-area">
          {{ result.kommune.areaInSquareKm }} km<sup>2</sup>
        </p>
        <label>📝 Skriftspråk</label>
        <p data-cy="kommune-written-language">
          {{
            result.kommune.writtenLanguage.charAt(0).toUpperCase() +
            result.kommune.writtenLanguage.slice(1)
          }}
        </p>
        <p>
          Les mer her:{' '}
          <a href="result.kommune.snlLink" target="_blank" rel="noreferrer">
            {{ result.kommune.name }}
          </a>
        </p>
      </div>
      <img
        data-cy="kommune-map"
        src="{data.kommune.mapUrl}"
        alt="kommuneMap"
        class="mapImg"
      />
    </div>
  </div>
</template>
<script setup="ts" lang="ts">
import kommuneService from "@/services/kommuneService";
import { useQuery } from "@vue/apollo-composable";
import { onBeforeMount } from "vue";

const { result, loading, error } = useQuery(kommuneService.GET_KOMMUNE, () => ({
  id: "0301",
}));
</script>

<style scoped>
p {
  font-size: 18px;
  margin-top: 0px;
}

label {
  font-size: 16px;
  font-weight: bold;
}

.detailsPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
}

.detailsPageTop {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.kommuneDetails {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10vw;
  margin-top: 20px;
  align-items: center;
}

.backArrow {
  max-width: 60px;
  position: absolute;
  left: 5%;
  margin-top: -15px;
  cursor: pointer;
}

.rating {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
}

.weaponImg {
  width: 50px;
}

.mapImg {
  width: 20%;
  height: 20%;
}

.line {
  background-color: #405a7e;
  height: 2px;
  width: clamp(100px, calc(100vw - 50px), 600px);
}

@media screen and (max-width: 500px) {
  .kommuneDetails {
    flex-direction: column;
    gap: 0px;
  }

  .mapImg {
    width: 150px;
  }

  .backArrow {
    max-width: 40px;
  }

  .weaponImg {
    width: 30px;
    z-index: 1;
  }

  h1 {
    font-size: 24px;
  }

  p {
    font-size: 16px;
  }
}
</style>
