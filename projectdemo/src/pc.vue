<template>
    <div>
       <h1>Enter your registration details</h1> 
       <h4>message:{{msg}}</h4>
    </div>
</template>
<script>
export default {
    name:"HelloR",
    props: {
        msg:{default:"checking result",type:String}
}
}
</script>