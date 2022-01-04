<template>
  <div class="favourites">
    <h1 class="favourites__title">Favourites</h1>
    <ol class="favourites__list">
      <li class="favourites__item">
        <div>
          <p class="favourites__text">What do you call cheese by itself? Provolone.</p>
          <p class="favourites__id">#ID: hNu4oORnOmb</p>
        </div>
        <button class="card__btn card__btn_load">Del</button>
      </li>
      <li class="favourites__item">
        <div>
          <p class="favourites__text">What do you call cheese by itself? Provolone.</p>
          <p class="favourites__id">#ID: hNu4oORnOmb</p>
        </div>
        <button class="card__btn card__btn_load">Del</button>
      </li>
      
    </ol>
  </div>
</template>

<script>
export default {
   name: 'Favourites',
   computed:{
     favourites(){
       return this.$store.state.favourites;
     }
   }
}
</script>

<style scoped lang="scss">

.favourites{

  &__title{
    text-align: center;
    font-size: 3rem;
    color: #2c3e50;
  }

  &__list{
    margin-top: 3rem;
    background: #ffffff;
    // width: 66.5rem;
    min-width: 32rem;
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
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }

  &__id{
    font-size: 1.4rem;
    color: #A6A6A6;
  }
}

@media (min-width: 320px) and (max-width: 600px) {
  .favourites__item{
    flex-direction: column;
    align-items: flex-start;
  }

  .favourites__id{
    margin-bottom: 0.8rem;
  }
}

</style>
