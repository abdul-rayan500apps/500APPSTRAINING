<template>
  <div class="hello">
   <first></first>
   <second></second>
   <third ></third>
   <message :msg="msg" :name="name" :contactnumber="contactnumber"></message>
   <pc3 ref="msg">{{msg}}</pc3>
   <props></props>
  

  </div>
</template>
<script>
import first from "../first.vue"
import second from "../second.vue"
import third from "./third.vue"
import message from "../message.vue"
import pc3 from "../pc.vue"
//import props from "@/src/props.vue"
import props from "../props.vue"


export default {
  name: 'HelloWorld',
components:{
    first,
    second,
    third,
    message,
    pc3,
    props,
  },
data() {
  return{
    msg: "hello",
    name: "abdul",
    contactnumber: "9553587600",
  };
},
mounted(){
  this.msg=this.$refs.pc3.msg;
  
}
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>



