<template>
    <div>
        <h1>Add function</h1>
        <input  type="number" id="num1">
        <input  type="number" id="num2">
        <button @click="add()">addition</button>
    </div>
</template>

<script>
export default{
    name:"AddS",
    data(){
        return {  
        }},
    methods:{
        add(){
            let x=Number(document.getElementById("num1").value);
             let y = Number(document.getElementById("num2").value);
             
             var z=x+y;
             document.write(z);
        }
    }
}
</script>
