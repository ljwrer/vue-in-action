<template>
    <div id="app">
        <hello v-if="show.hello"></hello>
        <forms v-if="show.forms"></forms>
        <counter v-if="show.counter"></counter>
        <tree v-if="show.tree" :model="treeData"></tree>
        <Tab :links="links"></Tab>
    </div>
</template>

<script type="text/babel">
    import Hello from './components/Hello'
    import forms from './components/forms'
    import counter from './components/counter'
    import store from './vuex/store'
    import tree from './components/tree'
    import Tab from './components/tab/Tab'
    import {getTreeData,getTabLinks} from './vuex/getters'
    export default {
        components: {
            Hello, forms,counter,tree,Tab
        },
        store,
        data(){
            return {
                show:{
                    hello:false,
                    forms:false,
                    counter:false,
                    tree:true
                }
            }
        },
        vuex:{
            getters:{
                treeData:getTreeData,
                links:getTabLinks
            }
        }
    }
</script>

<style>

</style>
