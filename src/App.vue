<template>
  <div id="app">
    <div class="flex flex-col h-screen justify-between">
      <div class="fixed z-20 w-full">
        <Navbar />
      </div>
      <router-view/>

  <!-- <Footer /> -->
    </div>
  </div>
</template>
<script>
import Navbar from './components/navbar'

export default {
  name: 'App',
  components:{ Navbar}, 
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
