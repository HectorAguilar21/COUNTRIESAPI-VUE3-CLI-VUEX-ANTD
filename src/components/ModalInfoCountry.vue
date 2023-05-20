<template>
  <div id="components-modal-demo-position">
    <a-button type="primary" @click="modal2Visible = true"> Ver mas </a-button>
    <a-modal
      v-model:visible="modal2Visible"
      :title="country.name.official"
      centered
      width="1000px"
      @ok="modal2Visible = false"
      :footer="null"
    >
      <div class="custom-modal-content">
        <div class="container-img">
          <h2>Escudo</h2>
          <img
            v-if="country.coatOfArms.svg"
            :src="country.coatOfArms.svg"
            :alt="`Imagen de: ${country.name.official}`"
          />
          <h1 v-else>Sin imagen...</h1>
        </div>
        <div class="container-info">
          <h2>Informacion</h2>
          <div class="info">
            <p>
              Población <span>{{ country.population }}</span>
            </p>
            <p>
              Región <span>{{ country.region }}</span>
            </p>
            <p>
              Ubicación Geográfica
              <span
                ><a :href="country.maps.googleMaps" target="_blank"
                  >Ver en Google Maps</a
                ></span
              >
            </p>
            <p v-for="(value, key) in country.currencies" :key="key">
              Moneda
              <span>{{ key }}, </span>
              Nombre
              <span> {{ value.name }}, </span>
              Simbolo
              <span> {{ value.symbol }}, </span>
            </p>
          </div>
          <div class="info-translate">
            <ul>
              <li v-for="(value, key) in country.translations" :key="key">
                {{ value.official }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </a-modal>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: ["country"],
  setup() {
    const modal2Visible = ref(false);
    return {
      modal2Visible,
    };
  },
});
</script>

<style scoped>
h2 {
  font-weight: 700;
  text-align: center;
}

P {
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 1.2rem;
}

p > span {
  font-weight: 700;
}

.custom-modal-content {
  display: flex;
}

.container-img {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 2px dotted gray;
}

img {
  width: 80%;
}

.container-info {
  width: 70%;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  gap: 2px;
  justify-content: center;
}

li {
  background-color: cornflowerblue;
  border-radius: 10px;
  padding: 2px 6px;
  color: white;
}
</style>
