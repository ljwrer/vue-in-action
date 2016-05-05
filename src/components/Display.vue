<template>
    <div>counter is {{counterValue}}</div>
</template>
<script>
    import {getCounter} from './../vuex/getters'
    export default{
        vuex:{
            getters:{
                counterValue:getCounter
            }
        }
    }
</script>
