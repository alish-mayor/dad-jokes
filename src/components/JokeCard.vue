<template>
  <div class="content">
    <div v-if="loading" class="loader"></div>
    <p v-if="checkEmpty(currentJoke) && (!loading)" class="card__text">Nothing here... Please load your first joke.</p>
    <div v-if="dataLoaded">
    <p class="card__text">{{ data.joke }}</p>
    <p class="card__id">#ID: {{ data.id }}</p>
    <button class="card__btn card__btn_add" @click="addToFavourites">Add to favourites</button>
    </div>
    <div class="notif" v-if="featured">
      <h3 class="notif__title">{{ notifTitle }}</h3>
      <p class="notif__subtitle">{{ notifText }}</p>
    </div>
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
      featured: false,
      notifTitle: '',
      notifText: '',
    }
  },
  methods: {
    loadJoke(){
      // const joke = this;
      // this.dataLoaded = false;
      // this.loading = true;
      // const url = "https://icanhazdadjoke.com/";

      // const xhr = new XMLHttpRequest();
      // xhr.open("GET", url);
        

      // xhr.setRequestHeader("Accept", "application/json");

      // xhr.onreadystatechange = function () {
      //     if (xhr.readyState === 4) {
      //       joke.data = JSON.parse(xhr.responseText);
      //       joke.loading = false;
      //       joke.dataLoaded = true;
      //       joke.$store.commit('changeCurrentJoke', joke.data);
      // }};

      // xhr.send();
      this.dataLoaded = false;
      this.loading = true;
      this.data = {
        joke: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, error?',
        id: 'jjknaibioord',
      },
      this.$store.commit('changeCurrentJoke', this.data);
      this.loading = false;
      this.dataLoaded = true;
    },
    addToFavourites(){
      if(this.favourites.includes(this.currentJoke)){
      this.notifTitle = 'Error';
      this.notifText = 'This joke added already!';
      this.showNotif();
      console.log(this.favourites);
      console.log(this.currentJoke);
      return;
      } else{
      this.notifTitle = 'Success!';
      this.notifText = 'Your joke added to favourites list.'
      this.$store.commit('addToFavourites', this.currentJoke);
      this.showNotif();
      console.log(this.favourites);
      console.log(this.currentJoke);
      }
      
    },  
    checkEmpty(object) {
      return Object.keys(object).length === 0 && object.constructor === Object;
    },
    showNotif(){
      this.featured = true;
      setTimeout(() => {
        this.featured = false;
      }, 3000);
    }
  },
  created(){
    if(this.checkEmpty(this.currentJoke)){
      return;
    } else {
      this.dataLoaded = true;
      this.data = this.currentJoke;
    }
  },
  computed: {
    currentJoke(){
      return this.$store.state.currentJoke;
    },
    favourites(){
      return this.$store.state.favourites;
    }
  }
}
</script>

<style lang="scss">
  @import '../variables.scss';


  .content{
    margin-top: 3rem;
  }

  .card__text{
    font-size: 1.8rem;
    // color: $dark;
    margin-bottom: 0.5rem;
  }

  .card__id{
    font-size: 1.6rem;
    color: $dark-grey;
    margin-bottom: 1.5rem;
  }

  .card__btn_add{
    background: $dark;
  }

  .loader {
    border: 5px solid #eaf0f6;
    border-radius: 50%;
    border-top: 5px solid $primary;
    width: 30px;
    height: 30px;
    animation: spinner 1s linear infinite;
  }
  .notif{
    position: fixed;
    top: calc(9rem + 20px);
    right: 20px;
    padding: 2rem 3rem;
    background: $white;
    border-radius: 15px;
    text-align: center;
    color: $primary;
    animation: 2s ease-in-out 1s fadeAway;


    &__title{
      font-size: 1.6rem;
      margin-bottom: 0.5rem;
      color: $dark;
    }

    &__subtitle{
      font-size: 1.4rem;
      color: #ACACAC;
    }
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes fadeAway {
    0%{
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
  }
</style>
