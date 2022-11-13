<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">Kommuner ikke funnet</div>
  <div v-else-if="result && result.kommune" className="detailsPage">
    <div className="detailsPageTop">
      <img
        @click="
          () => {
            $router.push('/');
          }
        "
        class="backarrow"
        src="../assets/backArrow.png"
        alt=""
      />
      <div class="content">
        <img
          :src="result.kommune.logoUrl"
          className="weaponImg"
          alt="kommuneWeaponImage"
        />
        <h1>{{ result.kommune.name }}</h1>
      </div>
    </div>
    <div className="line"></div>
    <div className="kommuneDetails">
      <div>
        <div className="rating">
          <div className="averageRating">
            <n-rate
              size="large"
              readonly
              :default-value="result.kommune.averageRating"
            />
            {{
              result.kommune.averageRating != 0
                ? "(" + result.kommune.averageRating.toFixed(2) + ")"
                : "(Ingen vurderinger)"
            }}
          </div>
        </div>
        <label>📍 Fylke</label>
        <p>{{ result.kommune.county.name }}</p>
        <label>👨‍👩‍👧‍👧 Innbyggertall</label>
        <p>{{ result.kommune.population }}</p>
        <label>🏔 Areal</label>
        <p>{{ result.kommune.areaInSquareKm }} km<sup>2</sup></p>
        <label>📝 Skriftspråk</label>
        <p>
          {{
            result.kommune.writtenLanguage.charAt(0).toUpperCase() +
            result.kommune.writtenLanguage.slice(1)
          }}
        </p>
        <p>
          Les mer her:
          <a :href="result.kommune.snlLink" target="_blank" rel="noreferrer">
            {{ result.kommune.name }}
          </a>
        </p>
      </div>
      <img :src="result.kommune.mapUrl" alt="kommuneMap" className="mapImg" />
    </div>

    <AddReview @onCreate="refresh" />
    <div class="reviews">
      <ReviewCard
        :key="review.id"
        v-for="review in result.kommune.kommuneRating.slice().reverse()"
        :review="review"
      />
    </div>
  </div>
</template>
<script setup="ts" lang="ts">
import kommuneService from "@/services/kommuneService";
import { useQuery } from "@vue/apollo-composable";
import { useRoute } from "vue-router";
import AddReview from "../components/AddReview.vue";
import ReviewCard from "../components/ReviewCard.vue";

// url param kommune/:id
const id = useRoute().params.id;

// get kommune data from GraphQL
const { result, loading, error, refetch } = useQuery(kommuneService.GET_KOMMUNE, () => ({
  id: id,
}));

// refresh the page when new review is added
function refresh() {
  setTimeout(() => {
    refetch();
  }, 1);
}
</script>

<style scoped>
.reviews {
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 16px;
  flex-direction: column;
  margin-top: 10px;
}
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
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
}
.detailsPageTop > .content {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
}

.kommuneDetails p {
  margin-bottom: 10px;
}
.kommuneDetails {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10vw;
  margin-top: 20px;
  align-items: center;
}

.backarrow {
  max-width: 60px;
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translate(0, -50%);
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
  width: 30%;
  height: 30%;
}

.line {
  background-color: #405a7e;
  height: 2px;
  width: clamp(100px, calc(100vw - 50px), 600px);
}
.averageRating {
  gap: 10px;
  display: flex;
}

@media screen and (max-width: 500px) {
  .kommuneDetails {
    flex-direction: column;
    gap: 0px;
  }

  .mapImg {
    width: 150px;
  }

  .backarrow {
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
