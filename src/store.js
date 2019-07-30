import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [],
    apiUrl: 'https://api.edamam.com/search'
  },
  mutations: {
    setRecipes(state, payload) {
      state.recipes = payload;
    }
  },
  actions: {
    async getRecipes({ state, commit }, plan) {
      try {
        let response = await axios.get(`${state.apiUrl}`, {
          params: {
            q: plan,
            app_id: '280cd3d2',
            app_key: 'b317932d54f1232154ec68637bdec8b4',
            from: 0,
            to: 9
          }
        });
        commit('setRecipes', response.data.hits);
      } catch (err) {
        commit('setRecipes', []);
      }
    }
  }
});
