<template>
  <n-button @click="openModal" color="#405a7e"> Legg til vurdering </n-button>
  <n-modal
    v-model:show="showModal"
    class="custom-card"
    preset="card"
    :style="bodyStyle"
    title="Gi kommunen en vurdering!"
    :bordered="false"
    size="huge"
  >
    <template #footer>
      <div class="rating">
        <n-rate
          v-model:value="rating"
          size="large"
          @update:value="updateRatingDescription(rating)"
          @mouseover="updateRatingDescription(rating)"
        />
        {{ ratingDescription }}
      </div>
      <n-config-provider :theme-overrides="themeOverrides">
        Gi anmeldelsen en tittel
        <n-input
          v-model:value="title"
          type="text"
          placeholder="Skriv her"
          @update:value="errorMessage = false"
        />
        Legg igjen en anmeldelse
        <n-input
          v-model:value="description"
          type="textarea"
          placeholder="Skriv her"
          @update:value="errorMessage = false"
        />
        Oppgi navn
        <n-input
          v-model:value="name"
          type="text"
          placeholder="Skriv her"
          @update:value="errorMessage = false"
        />
      </n-config-provider>
      <p v-if="errorMessage" class="errorMessage">
        Vennligst fyll ut alle feltene!
      </p>
      <div class="modalButtons">
        <n-button @click="addReview" color="#405a7e"> Del </n-button>
        <n-button @click="showModal = false" color="#405a7e"> Avbryt </n-button>
      </div>
    </template>
  </n-modal>
</template>

<script setup="ts">
import { ref } from "vue";
import { getRatingDescription } from "@/services/getRatingDescription";
import { useRoute } from "vue-router";
import { useMutation } from "@vue/apollo-composable";
import reviewService from "../services/reviewService";

// url param kommune/:id
const id = useRoute().params.id;

const showModal = ref(false);
const title = ref("");
const description = ref("");
const name = ref("");
const rating = ref(0);
const ratingDescription = ref("");
const errorMessage = ref(false);

// post review data to GraphQL
const { mutate: postReview } = useMutation(reviewService.POST_REVIEW);

function openModal() {
  resetValues();

  //close modal
  showModal.value = true;
}

async function addReview() {
  //display error message if required fields are empty
  if (
    rating.value === 0 ||
    title.value === "" ||
    description.value === "" ||
    name.value === ""
  ) {
    errorMessage.value = true;
  }
  // post review to GraphQL
  else {
    const response = await postReview({
      name: name.value,
      rating: rating.value,
      title: title.value,
      description: description.value,
      kommuneId: id,
    });
    //review id
    console.log(response.data.addKommuneRating._id);
    // review timestamp
    console.log(response.data.addKommuneRating.timestamp);
    // onCreate(review);

    // close modal
    showModal.value = false;
  }
}

function updateRatingDescription(rating) {
  //hide error message
  errorMessage.value = false;
  //update rating description
  ratingDescription.value = getRatingDescription(rating);
}

//reset values
function resetValues() {
  title.value = "";
  description.value = "";
  name.value = "";
  rating.value = 0;
  ratingDescription.value = "";
  errorMessage.value = false;
}

// change modal width
const bodyStyle = { width: "500px" };

// override theme from Naive UI
const themeOverrides = {
  common: {
    primaryColor: "#405a7e",
    primaryColorHover: "#405a7e",
  },
};
</script>

<style scoped>
.modalButtons {
  gap: 20px;
  display: flex;
  justify-content: center;
}
.rating {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #405a7e;
  font-size: small;
  margin-bottom: 15px;
  row-gap: 15px;
}
.n-card__footer {
  gap: 20px;
}
.n-button {
  margin: 10px;
  margin-top: 20px;
  width: 160px;
}
.n-input {
  margin-bottom: 10px;
}
.errorMessage {
  display: flex;
  justify-content: center;
  color: rgba(226, 67, 41, 1);
  font-size: 16px;
}
</style>
