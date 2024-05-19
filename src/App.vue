<template>
  <div id="app">
    <HeaderComponent />
    <!-- <nav> -->
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <!-- </nav> -->
    <!-- <MainComponent/> -->
    <router-view/>
    <FooterComponent />
  </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue';
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    HeaderComponent,
    MainComponent,
    FooterComponent,
  }
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
