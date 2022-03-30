<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <qstn-1 />
    <qstn-2 msg1="question no 2"/>
    <qstn-2 msg="name:agile crm"/>
    <qstn-2 data="description: A company of excellence"/>
    <qstn-2 experience="experience:12"/>
    <qstn-2 location="location:Hyderabad"/>-->
    <Qstn6 />
    <Bcards />
    <Gfg />
    
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Qstn1 from './components/Qstn1.vue'
import Qstn2 from './components/Qstn2.vue'
import Qstn6 from './components/Qstn6.vue'
import Bcards from './components/Bcards.vue'
import Gfg from './components/Gfg.vue'
export default {
  name: 'App',
  components: {
    //HelloWorld,
     Qstn1,
    Qstn2,
    Qstn6,
    Bcards,
    Gfg
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
