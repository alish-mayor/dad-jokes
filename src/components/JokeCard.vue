<template>
  <div class="card">
     <div class="card__header">
        <h2 class="card__title">One day dad said:</h2>
        <button class="card__btn card__btn_load" @click="loadData">Load</button>
      </div>
    <div class="loading-container">
      <div v-if="isLoading" class="loader"></div>
      <p v-if="checkEmpty(getCurJoke) && (!isLoading)" class="card__text">Nothing here... Please load your first joke.</p>
    </div>
    <div class="content" v-if="!isLoading">
    <p class="card__text">{{ getCurJoke.joke }}</p>
    <p class="card__id">#ID: {{ getCurJoke.id }}</p>
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
      favourited: false,
      notifTitle: '',
      notifText: '',
    }
  },
  methods: {
    addToFavourites(){
      if(this.getFavourites.includes(this.getCurJoke) || this.checkEmpty(this.getCurJoke)){
      this.setNotifText('Error', 'This joke added already!');
      this.showNotif();
      return;
      } else{
      this.$store.commit('addToFavourites', this.getCurJoke);
      this.setNotifText('Success!', 'Your joke added to favourites list.');
      this.showNotif();
      }
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
    },
    checkEmpty(object) {
      return Object.keys(object).length === 0 && object.constructor === Object;
    },
    loadData(){
      this.$store.dispatch('loadJoke');
    }
  },
  created(){
    if(this.checkEmpty(this.getCurJoke)){
      return;
    } else {
      this.data = this.getCurJoke;
    }
  },
  computed: mapGetters(['getCurJoke', 'getFavourites', 'isLoading']),
}
</script>

<style lang="scss">
  @import '../variables.scss';


  .content{
    margin-top: 3rem;
  }

  .card{
  background: $white;
  min-width: 30rem;
  max-width: 66.5rem;
  padding: 3rem;
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.25);
  
  &__header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title{
    font-size: 2.4rem;
    font-weight: 500;
  }

  &__btn{
    color: $white;
    border-radius: 5px;
    border: none;
    padding: 1rem 1.5rem;
    font-size: 1.6rem;
    cursor: pointer;
    font-family: inherit;

    &_load{
      background: $primary;
      margin-left: 1rem;
    }

    &:hover{
      filter: brightness(90%);
    }
  }

  &__text{
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }
  
  &__id{
    font-size: 1.6rem;
    color: $dark-grey;
    margin-bottom: 1.5rem;
  }
  
  &__btn_add{
    background: $dark;
  }
}

  .loading-container{
    margin-top: 3rem;
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
