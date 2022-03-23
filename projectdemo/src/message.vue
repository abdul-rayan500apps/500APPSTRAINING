<template>
  <div class="hello">
    <h1>msg:{{ msg }}</h1>
    <h1>name:{{ name }}</h1>
    <h1>contactnumber:{{ contactnumber }}</h1>
    <p>{{items}}</p>
  </div>
</template>


<script>
export default {
  name: 'MessagE',
  props: {
    msg: String,
    name:String,
    contactnumber:{
      
      type:Number
    },
    items:Array
  },
  data(){
    return{
    }
  }
}
</script>
