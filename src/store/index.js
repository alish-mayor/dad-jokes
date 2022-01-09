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
      // if (state.favourites.includes(joke) || helper.methods.checkEmpty(joke))
      //   return;
      state.favourites.push(joke);
    },
    deleteJoke(state, index) {
      state.favourites.splice(index, 1);
    },
    changeCurrentJoke(state, joke) {
      state.currentJoke = Object.assign({}, joke);
    },
  },
  actions: {},
  modules: {},
});
