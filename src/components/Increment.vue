<template>
    <div>
        <button @click="increment">increment</button>
        <button @click="decrement">decrement</button>
    </div>
</template>
<script>
    import {incrementCounter,decrementCounter} from './../vuex/actions'
    export default{
        vuex:{
            actions:{
                increment:incrementCounter,
                decrement:decrementCounter
            }
        }
    }
</script>
