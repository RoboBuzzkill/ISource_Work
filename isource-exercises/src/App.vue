<template>
  <div id="app">
    <Navigation/>
    <router-view/>
  </div>
</template>
<script>
  import Navigation from './components/Navigation.vue';

  export default{
    name: "App",
    components: {
      Navigation,
    }
  }
</script>
<style>
/* Global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

#app {
  width: 100%;
  min-height: 100vh;
}
</style>