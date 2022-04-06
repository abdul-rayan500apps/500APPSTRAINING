import vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import About from "../components/About"
import Second from "../components/Second"
import Static from "@/components/Static"
import Dynamic from '@/components/Dynamic'


vue.use(Router)

const routes = [
    {
        path:'/',
        name:"Home",
        component:HelloWorld
    },
    {
        path:'/about',
        name:"About",
        component:About
    },
    {
        path:'/second',
        name:"Second",
        component:Second
    },
    {
        path:'/static',
        name:"Static",
        component:Static
    },
    {
        path:'/dynamic',
        name:"dynamic",
        component:Dynamic
    }
]
let router = new Router({routes})

export default router