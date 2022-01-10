<template>
  <div class="favourites">
    <h1 class="favourites__title">Favourites</h1>
    <p class="favourites__caption" v-if="getFavourites.length < 1">You don't have any favourited joke yet. <br> Please add one at least!</p>
    <ol class="favourites__list">
      <li v-for="(item, index) in getFavourites" :key="item.id" class="favourites__item">
        <div>
          <p class="favourites__text">{{ item.joke }}</p>
          <p class="favourites__id">#ID: {{ item.id }}</p>
        </div>
        <button class="card__btn card__btn_load" @click="deleteJoke(index)">Del</button>
      </li>
    </ol>
  </div>
</template>

<script>
import {mapGetters} from 'vuex' 

export default {
  
   name: 'Favourites',
   computed: mapGetters(['getFavourites']),
   methods: {
     deleteJoke(index){
       this.$store.commit('deleteJoke', index);
     }
   }
}
</script>

<style scoped lang="scss">

@import '../variables.scss';

.favourites{

  &__title{
    text-align: center;
    font-size: 3rem;
  }

  &__list{
    margin-top: 2rem;
    background: $white;
    max-width: 66.5rem;
    min-width: 30rem;
    list-style-type: none;
    border-radius: 15px;
    box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.25);
  }

  &__item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 2.5rem;
    border-bottom: 1px solid #CECECE;

    &:last-child{
      border-bottom: none;
    }
  }

  &__text{
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    width: 90%;
  }

  &__id{
    font-size: 1.4rem;
    color: #A6A6A6;
  }

  &__caption{
    margin-top: 1rem;
    font-size: 1.8rem;
    color: #acacac;
    text-align: center;
  }
}

@media (min-width: 320px) and (max-width: 600px) {
  .favourites__item{
    flex-direction: column;
    align-items: flex-start;
  }

  .favourites__text{
    width: 100%;
  }

  .favourites__id{
    margin-bottom: 0.8rem;
  }

  .card__btn_load{
    margin-left: 0;
  }
}

</style>
