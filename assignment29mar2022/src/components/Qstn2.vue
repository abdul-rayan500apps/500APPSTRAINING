<template>

<div>
    
<h1>{{msg1}}</h1>
<h1>{{ msg }}</h1>
<h1>{{ data }}</h1>
<h1>{{ experience }}</h1>
<h1>{{ location}} </h1>
</div>
    
</template>

<script>

export default {
    name:'QstN2',
    props:{
        msg1:String,
        msg: String,
        data: String,
        experience:String,
        location:String,
    }
}
</script>
