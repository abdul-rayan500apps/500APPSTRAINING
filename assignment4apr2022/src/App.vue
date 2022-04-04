<template>
  <div id="app">
    <Qstn10 />
    <Qstn3 category1="category1"/>
  </div>
  
</template>

<script>
import Qstn10 from './components/Qstn10.vue'
import Qstn3 from './components/Qstn3.vue'
export default {
  name: 'App',
  components: {
    Qstn10,
    Qstn3
    

    
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
  margin-top: 60px;
}
</style>
