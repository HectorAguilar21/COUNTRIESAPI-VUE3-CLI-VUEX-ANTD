import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  state: {
    countries: []
  },
  getters: {
  },
  mutations: {
    setCountries(state, payload) {
      state.countries = payload
    }
  },
  actions: {
    async fetchCountries({ commit }) {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const data = response.data;
        commit('setCountries', data)
      } catch (error) {
        // Manejar errores de solicitud
        console.error(error);
      }
    }
  },
  modules: {
  }
})
