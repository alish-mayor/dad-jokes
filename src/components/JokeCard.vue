<template>
  <div class="content">
    <div v-if="loading" class="loader"></div>
    <p v-if="checkEmpty(getCurJoke) && (!loading)" class="card__text">Nothing here... Please load your first joke.</p>
    <div v-if="dataLoaded">
    <p class="card__text">{{ data.joke }}</p>
    <p class="card__id">#ID: {{ data.id }}</p>
    <button class="card__btn card__btn_add" @click="addToFavourites">Add to favourites</button>
    </div>
    <div class="notif" v-if="favourited">
      <h3 class="notif__title">{{ notifTitle }}</h3>
      <p class="notif__subtitle">{{ notifText }}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'HelloWorld',
  data(){
    return{
      data: {},
      joke: '',
      id: '',
      dataLoaded: false,
      loading: false,
      favourited: false,
      notifTitle: '',
      notifText: '',
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
      if(this.getFavourites.includes(this.getCurJoke)){
      this.setNotifText('Error', 'This joke added already!');
      this.showNotif();
      return;
      } else{
      this.$store.commit('addToFavourites', this.getCurJoke);
      this.setNotifText('Success!', 'Your joke added to favourites list.');
      this.showNotif();
      }
      
    },  
    checkEmpty(object) {
      return Object.keys(object).length === 0 && object.constructor === Object;
    },
    showNotif(){
      const btn = document.querySelector('.card__btn_add');
      this.favourited = true;
      btn.disabled = true;
      setTimeout(() => {
        this.favourited = false;
        btn.disabled = false;
      }, 3000);
    },
    setNotifText(title,subtitle){
      this.notifTitle = title;
      this.notifText = subtitle;
    }
  },
  created(){
    if(this.checkEmpty(this.getCurJoke)){
      return;
    } else {
      this.dataLoaded = true;
      this.data = this.getCurJoke;
    }
  },
  computed: mapGetters(['getCurJoke', 'getFavourites']),
}
</script>

<style lang="scss">
  @import '../variables.scss';


  .content{
    margin-top: 3rem;
  }

  .card__text{
    font-size: 1.8rem;
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
    top: 11rem;
    right: 2rem;
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


  @media (min-width: 320px) and (max-width: 600px) {
  .notif{
    top: 9rem;
    right: 1rem;
  }
}
</style>
