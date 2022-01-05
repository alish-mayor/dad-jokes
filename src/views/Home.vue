<template>
  <div class="home">
    <div class="card">
      <div class="card__header">
        <h2 class="card__title">One day dad said:</h2>
        <button class="card__btn card__btn_load" @click="loadData">Load</button>
      </div>
      <joke-card/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import JokeCard from '@/components/JokeCard.vue'

export default {
  name: 'Home',
  components: {
    JokeCard,
  },
  methods:{
    loadData(){
      this.$children[0].loadJoke();
    }
  }
}
</script>

<style lang="scss">
@import '../variables.scss';

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
    // color: $dark;
  }

  &__btn{
    color: $white;
    border-radius: 5px;
    border: none;
    padding: 1rem 1.5rem;
    font-size: 1.6rem;
    cursor: pointer;

    &_load{
      background: $primary;
      margin-left: 1rem;
    }

    &:hover{
      filter: brightness(90%);
    }
  }
  
}
</style>
