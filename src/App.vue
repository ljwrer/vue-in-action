<template>
    <div id="app">
        <hello v-if="show.hello"></hello>
        <forms v-if="show.forms"></forms>
        <counter v-if="show.counter"></counter>
    </div>
</template>

<script>
    import Hello from './components/Hello'
    import forms from './components/forms'
    import counter from './components/counter'
    import store from './vuex/store'
    export default {
        components: {
            Hello, forms,counter
        },
        store,
        data(){
            return {
                show:{
                    hello:false,
                    forms:false,
                    counter:true
                }
            }
        }
    }
</script>

<style>

</style>
