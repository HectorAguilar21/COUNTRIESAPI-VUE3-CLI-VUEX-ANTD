<template>
  <PageTitle />
  <CountriesList />
</template>

<script>
import PageTitle from "./components/PageTitle.vue";
import CountriesList from "./components/CountriesList.vue";

export default {
  name: "App",
  components: {
    PageTitle,
    CountriesList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
