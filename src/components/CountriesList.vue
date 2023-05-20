<template>
  <div class="container">
    <a-auto-complete
      v-model:value="searchText"
      style="width: 500px; padding-bottom: 10px"
      placeholder="Escribe el nombre de un pais"
      @search="handleSearch"
    >
    </a-auto-complete>
    <div class="container-card" v-if="searchText !== ''">
      <CountryCard
        v-for="country in filteredCountries"
        :key="country.name"
        :country="country"
      />
    </div>
    <div v-else>
      <h1>Empieza a escribir el nombre de un país</h1>
    </div>
  </div>
</template>

<script>
import CountryCard from "./CountryCard.vue";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "CountriesList",
  components: {
    CountryCard,
  },
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch("fetchCountries");
    });

    const countries = computed(() => store.state.countries);

    const searchText = ref("");
    const filteredCountries = ref([]);
    const handleSearch = async (val) => {
      try {
        const filtered = countries.value.filter((country) =>
          country.name.common.toLowerCase().includes(val.toLowerCase())
        );

        filteredCountries.value = filtered.map((country) => country);
      } catch (error) {
        console.error(error);
      }
    };
    return {
      searchText,
      filteredCountries,
      handleSearch,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 5px;
}

h1 {
  margin-top: 50px;
}
</style>
