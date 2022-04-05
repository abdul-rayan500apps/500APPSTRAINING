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
    props:{
        name:String,
        mail:String,
        phone:Number
    }
}
</script>
