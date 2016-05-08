<template>
    <div id="app">
        <hello v-if="show.hello"></hello>
        <forms v-if="show.forms"></forms>
        <counter v-if="show.counter"></counter>
        <tree v-if="show.tree" :model="data"></tree>
    </div>
</template>

<script type="text/babel">
    import Hello from './components/Hello'
    import forms from './components/forms'
    import counter from './components/counter'
    import store from './vuex/store'
    import tree from './components/tree'
    export default {
        components: {
            Hello, forms,counter,tree
        },
        store,
        data(){
            return {
                show:{
                    hello:false,
                    forms:false,
                    counter:false,
                    tree:true
                },
                data:{
                    name: 'My Tree',
                    children: [
                        {name: 'hello'},
                        {name: 'wat'},
                        {
                            name: 'child folder',
                            children: [
                                {
                                    name: 'child folder',
                                    children: [
                                        {name: 'hello'},
                                        {name: 'wat'}
                                    ]
                                },
                                {name: 'hello'},
                                {name: 'wat'},
                                {
                                    name: 'child folder',
                                    children: [
                                        {name: 'hello'},
                                        {name: 'wat'}
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
        }
    }
</script>

<style>

</style>
