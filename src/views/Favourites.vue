<template>
  <div class="favourites">
    <ol>
      <li v-for="joke in favourites" :key="joke.id">
        <p>{{joke.joke}}</p>
        <p>ID: {{joke.id}}</p>
        <hr>
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
