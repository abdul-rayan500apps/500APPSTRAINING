<template>
    <div>
        <h1>Dynamic</h1>
         <p>name:{{name}}</p>
        <p>mail:{{mail}}</p>
        <p>phone:{{phone}}</p> 
    </div>
</template>
<script>

export default {
    name:"DynamicData",

    data(){
        return{
            name:'abdul',
            mail:'rayan.abdul53@gmail.com',
            phone:786786786,

        }
    }
}
</script>
