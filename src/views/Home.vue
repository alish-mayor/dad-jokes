<template>
  <div class="home">
      <joke-card/>
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
}
</script>

<style lang="scss">
@import '../variables.scss';
</style>
