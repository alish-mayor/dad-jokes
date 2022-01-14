import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentJoke: {},
    favourites: [],
    isLoading: false,
  },
  mutations: {
    addToFavourites(state, joke) {
      state.favourites.push(joke);
    },
    deleteJoke(state, index) {
      state.favourites.splice(index, 1);
    },
    changeCurrentJoke(state, joke) {
      state.currentJoke = Object.assign({}, joke);
    },
    changeLoading(state, param) {
      state.isLoading = param;
    },
  },
  actions: {
    loadJoke(context) {
      const url = "https://icanhazdadjoke.com/";

      context.commit("changeLoading", true);

      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);

      xhr.setRequestHeader("Accept", "application/json");

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          context.commit("changeCurrentJoke", JSON.parse(xhr.responseText));
          context.commit("changeLoading", false);
        }
      };
      xhr.send();
    },
  },
  getters: {
    getCurJoke(state) {
      return state.currentJoke;
    },
    getFavourites(state) {
      return state.favourites;
    },
    isLoading(state) {
      return state.isLoading;
    },
  },
  modules: {},
});
