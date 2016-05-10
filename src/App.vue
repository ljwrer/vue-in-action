<template>
    <div id="app">
        <tree :model="treeData"></tree>
        <Tab :links="links"></Tab>
    </div>
</template>

<script type="text/babel">
    import store from './vuex/store'
    import tree from './components/tree'
    import Tab from './components/Tab'
    import {getTreeData,getTabLinks} from './vuex/getters'
    export default {
        components: {
            tree,Tab
        },
        store,
        vuex:{
            getters:{
                treeData:getTreeData,
                links:getTabLinks
            }
        }
    }
</script>

