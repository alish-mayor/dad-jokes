<template>
  <div class="content">
    <p v-if="loading" class="card__text">Loading...</p>
    <div v-if="dataLoaded">
    <p class="card__text">{{ data.joke }}</p>
    <p class="card__id">#ID: {{ data.id }}</p>
    <button class="card__btn card__btn_add" @click="addToFavourites">Add to favourites</button>
    </div>
  </div>
</template>

<script>
import helper from '../helper.js';

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
            joke.$store.commit('changeCurrentJoke', joke.data);
      }};

      xhr.send();
    },
    addToFavourites(){
      this.$store.commit('addToFavourites', this.data);
    },

  },
  created(){
    if(helper.methods.checkEmpty(this.currentJoke)){
      return;
    } else {
      this.dataLoaded = true;
      this.data = this.currentJoke;
    }
  },
  computed: {
    currentJoke(){
      return this.$store.state.currentJoke;
    }
  }
}
</script>

<style lang="scss">
  .content{
    margin-top: 3rem;
  }

  .card__text{
    font-size: 1.8rem;
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }

  .card__id{
    font-size: 1.6rem;
    color: #A6A6A6;
    margin-bottom: 1.5rem;
  }

  .card__btn_add{
    background: #2c3e50;
  }
</style>
