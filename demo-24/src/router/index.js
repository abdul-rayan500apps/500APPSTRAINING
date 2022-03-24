import vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import About from "../components/About"

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
    }
]

let router = new Router({routes})

export default router