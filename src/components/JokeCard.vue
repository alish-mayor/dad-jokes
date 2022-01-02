<template>
  <div class="card">
    <div>
      <button class="card__btn">I want hear another one!</button>
      <h2 class="card__title">One day dad said:</h2>
    </div>
    <p class="card__text"></p>
    <p class="card__id"></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      data: '',
      url: 'https://icanhazdadjoke.com/',
      options: {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        
      }
    }
  },
  methods: {
    async loadJoke(){
      try {
        const response = await fetch(this.url, this.options);
        if(!response.ok){
          const msg = 'Nothing found';
          throw new Error(msg);
        }
        this.data = await response.json();
        console.log(this.data);
      } catch(error){
        console.log(error);
      }
    }
  },
  mounted(){
    this.loadJoke();
  }
}
</script>

<style scoped lang="scss">

</style>
