<template>
  <div id="app">
    <header class="header">
      <h1 class="logo">Dad<span class="logo_red">Jokes</span></h1>
      <nav class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/favourites">Favourites</router-link>
      </nav>
    </header>
    <main class="main">
      <router-view/>
    </main>    
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

$primary: #e23c13;
$dark: #2c3e50;
$white: #ffffff;

*,
*::before,
*::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root{
  font-size: 10px;
}

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.header{
  background: $dark;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 4rem;
}

.logo{
  font-size: 3rem;
  color: $white;
  font-weight: 700;

  &_red{
    color: $primary;
  }
}

.nav{

  a{
    font-size: 2rem;
    font-weight: 400;
    text-decoration: none;
    color: $white;

    &.router-link-exact-active{
      color: $primary;
    }

    &:first-child{
      margin-right: 1.8rem;
    }
  }
}

.main{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #F4F3F3;
  padding: 1rem;
}

@media (min-width: 320px) and (max-width: 600px) {
  :root{
  font-size: 8px;
  }

  .header{
    padding: 2rem 1rem;
  }
}

</style>
