<template>
  <div id="app">
   <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  <Home/>
  <Add/>
  
  
 
  </div>
</template>

<script>
import Add from './components/Add.vue';
import Home from '@/components/Home.vue'

export default {
  name: "App",
  components: {
    Home,
    Add,
    
     
    
    
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
