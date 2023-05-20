<template>
  <a-card hoverable style="width: 240px">
    <template #cover>
      <img :alt="country.flags.alt" :src="country.flags.svg" />
    </template>
    <h3>
      Nombre oficial:
      <br />
      <span>{{ country.name.official }}</span>
    </h3>
    <h3>
      Nombre común:
      <br />
      <span>{{ country.name.common }}</span>
    </h3>
    <ModalInfoCountryVue :country="country" />
  </a-card>
</template>

<script>
import ModalInfoCountryVue from "./ModalInfoCountry.vue";

export default {
  name: "CountryCard",
  components: {
    ModalInfoCountryVue,
  },
  props: ["country"],
};
</script>
<style scoped>
h3 {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
span {
  font-weight: 600;
}
</style>
