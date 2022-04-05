<template>
  <div id="app">
    <router-view />
    <static name="abdul" mail="rayan.abdul53@gmail.com" phone="100" />
  </div>
</template>

<script>
import Static from './components/Static.vue'


export default {
  name: 'App',
  components: {
    
   
  },
}

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
