<template>
    <div>
        <h1>hello from home component</h1>
        <button type="submit" @click="out()">array button</button>
    </div>
</template>
<script>


export default {
    name:'HomE',
    data(){
        return{
            array:["bmw","audi","mercedez"],
            result:"",
        }
    },
    methods:{
        out(){
        this.result=this.array[0,2];
       document.write(this.result);
            
    }
}
}
    
</script>
