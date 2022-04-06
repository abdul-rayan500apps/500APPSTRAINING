<template>
  <div id="app">
    <QuestioN1/>
    <!--<QuestioN8/>
    <QuestioN5/>
    <QuestioN4/>-->
    <QuestioN6 ref="address" address="Flower">{{address}}</QuestioN6>
    <QuestioN9/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import QuestioN1 from './components/QST1.HTML'
//import QuestioN8 from './components/Qstn8.vue'
//import QuestioN5 from './components/Qstn5.vue'
//import QuestioN4 from './components/Qstn4.vue'
import QuestioN6 from'./components/Qstn6.vue'
import QuestioN9 from './components/Qstn9.vue'
export default {
  name: 'App',
  components: {
    //HelloWorld,
    QuestioN1,
    //QuestioN8,
    //QuestioN5,
   // QuestioN4,
    QuestioN6,
    QuestioN9
    
  },
   mounted:function() {
         this.$refs.QuestioN6.address
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
