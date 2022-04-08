import vue from 'vue'
import Router from 'vue-router'
import Add from "@/components/Add.vue"
import Home from "@/components/HelloWorld.vue";
import Cookies from "@/components/cookies.vue";
import BTable from "@/components/Table.vue";
import ApiFetchData from "@/components/Apidata.vue";
import AxioS from "@/components/api2.vue";
import FormTags from "@/components/FormTags.vue";
import QuestioN2 from "@/components/Question2";
import QuestioN7 from "@/components/Question7";
import QuestioN6 from "@/components/Question6"






vue.use(Router)

const routes = [
    {
        path:'/',
        name:"Home",
        component:Home
    },
    {
        path:'/add',
        name:"Add",
        component:Add
    },
    {
        path:'/cookies',
        name:"cookies",
        component:Cookies
    },
    {
        path:'/table',
        name:"BTable",
        component:BTable
    },
    {
        path:'/api',
        name:"ApiFetchData",
        component:ApiFetchData
    },
    {
        path:'/api2',
        name:"AxioS",
        component:AxioS
    },
    {
        path:'/form',
        name:"FormTags",
        component:FormTags,
    },
    {
        path:'/math',
        name:"QuestioN2",
        component:QuestioN2,
    },
    
    {
        path:'/data',
        name:"QuestioN7",
        component:QuestioN7,
    },
    {
        path:'/drop',
        name:"QuestioN6",
        component:QuestioN6,
    },






]
    








    let router = new Router({routes})

export default router