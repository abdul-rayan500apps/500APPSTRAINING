<template>
  <div id="app">
    <img alt="mantra group" src="https://media-exp1.licdn.com/dms/image/C510BAQH0Z2MwNPI_0Q/company-logo_200_200/0/1583985096212?e=2147483647&v=beta&t=5TEJAVZJneZBfJlC0S-c3vIM4jDjNlZtxvV8_rPWvbk">
    <HelloWorld msg="Welcome to mantragroup"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
