<template>
    <div>
        <ul>
            <li v-for="link in links" transition="bounce" stagger="500">
                <a v-link="link.pathName">{{link.name}}</a>
                <span @click="removeLink($index)">[x]</span>
            </li>
        </ul>
        <router-view>{{$route.path}}</router-view>
    </div>
</template>
<style scoped>
    body{
        background-color:deepskyblue;
    }
    .bounce-transition {
        display: inline-block; /* 否则 scale 动画不起作用 */
        margin: 20px;
    }
    .bounce-enter {
        animation: bounce-in .5s;
    }
    .bounce-leave {
        animation: bounce-out .5s;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
    @keyframes bounce-out {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(0);
        }
    }
</style>
<script>
    import {removeLink} from './../../vuex/actions'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        props:{
            links:Array
        },
        vuex:{
            actions:{
                removeLink
            }
        }
    }
</script>
