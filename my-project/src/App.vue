<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link :to="{name:'hello',params:{xxx:'ssssssss'}}">hello</router-link>
    <router-link :to="{name:'helloworld',params:{yyy:'ahahahaha'}}">helloworld</router-link>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
