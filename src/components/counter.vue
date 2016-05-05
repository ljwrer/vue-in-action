<template>
    <div>
        <Display></Display>
        <Increment></Increment>
        <Amount></Amount>
    </div>
</template>
<style>
    body{
        background-color:#f0f0f0;
    }
</style>
<script>
    import Display from './Display'
    import Increment from './Increment'
    import Amount from './Amount'
    export default{
        data(){
            return{

            }
        },
        components:{
            Display,Increment,Amount
        }
    }
</script>
