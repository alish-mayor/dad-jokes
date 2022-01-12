import Vue from "vue";
import Vuex from "vuex";
// import helper from "../helper.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentJoke: {},
    favourites: [],
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
  },
  actions: {
    loadJoke(context) {
      const url = "https://icanhazdadjoke.com/";

      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);

      xhr.setRequestHeader("Accept", "application/json");

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          context.commit("changeCurrentJoke", JSON.parse(xhr.responseText));
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
  },
  modules: {},
});
