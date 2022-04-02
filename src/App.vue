<template>
  <div class="app">
    <Navigation/>
    <router-view />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
export default {
  name: "App",
  components: {
  Navigation,
  }
};
</script>

<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.9.0/css/all.css");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
}
.app {
  min-height: 100vh;
  position: relative;
  background-color: #f7f2f2;
}
.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}
</style>