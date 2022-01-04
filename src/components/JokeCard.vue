<template>
  <div class="content">
    <!-- <p v-if="loading">Loading...</p> -->
    <p class="card__text">What do you call cheese by itself? Provolone.</p>
    <p class="card__id">#ID: hNu4oORnOmb</p>
    <button class="card__btn card__btn_add">Add to favourites</button>
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
