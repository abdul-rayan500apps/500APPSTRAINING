<template>
    <div>
        <h1>Static</h1>
        <h4>Name=abdul</h4>
        <h4>Mail=rayan.abdul53@gmail.com</h4>
        <h4>Phone=78678</h4>
    </div>
</template>
<script>


export default{
    name:'StaticWay',
    props:{
        name:String,
        mail:String,
        phone:Number
    }
}
</script>
