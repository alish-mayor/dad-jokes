<template>
  <div class="card">
    <div class="card__buttons">
      <button class="card__btn" @click="loadJoke">I want hear another one!</button>
    </div>
    <div>
      <h2 class="card__title">One day dad said:</h2>
      <button class="card__btn card__btn_dark" @click="addToFavourites">Add to favourites</button>
    </div>
    <p v-if="loading">Loading...</p>
    <p v-if="dataLoaded" class="card__text">{{data.joke}}</p>
    <p v-if="dataLoaded" class="card__id">ID: {{data.id}}</p>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data(){
    return{
      data: {},
      joke: '',
      id: '',
      dataLoaded: false,
      loading: false,
    }
  },
  methods: {
    loadJoke(){
      const joke = this;
      this.dataLoaded = false;
      this.loading = true;
      const url = "https://icanhazdadjoke.com/";

      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
        

      xhr.setRequestHeader("Accept", "application/json");

      xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            joke.data = JSON.parse(xhr.responseText);
            joke.loading = false;
            joke.dataLoaded = true;
      }};

      xhr.send();
    },
    addToFavourites(){
      this.$store.commit('addToFavourites', this.data);
    },
  },
}
</script>

<style lang="scss">

</style>
