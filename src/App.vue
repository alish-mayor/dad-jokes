<template>
  <div id="app">
    <h2 class="title">Dad<span class="title_red">Jokes</span></h2>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/favourites">Favourites</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

$primary: #e23c13;
$text-dark: #2c3e50;

:root{
  font-size: 10px;
}

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-dark;
}

#nav {
  text-align: center;
  margin-bottom: 1rem;
  a {
    font-size: 2rem;
    font-weight: bold;
    text-decoration: none;
    color: $text-dark;

    &.router-link-exact-active {
      color: $primary;
    }

    &:first-child{
      margin-right: 1rem;
    }
  }
}

.title{
  font-size: 2rem;

  &_red{
    color: $primary;
  }
}
</style>
