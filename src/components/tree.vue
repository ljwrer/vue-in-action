<template>
    <li>
        <div class="toggle" @click="toggle('open')">
            <span v-if="openable">[{{open?'-':'+'}}]</span>
            <a v-if="linkable" v-link="model.pathName" :class="{'link':linkable}" @click="addLink({'name':model.name,'pathName':model.pathName})">{{model.name}}</a>
            <span v-else :class="{'disable':disable}">{{model.name}}</span>
        </div>

        <ul v-show="open" v-if="model.children&&model.children.length" transition="expand" stagger="100">
            <tree
                v-for="model in model.children"
                :model="model">
            </tree>
        </ul>
    </li>
</template>
<script type="text/babel">
    import {addLink} from './../vuex/actions'
    export default{
        name: "tree",
        data(){
            return {
                open:false
            }
        },
        props: {
            model: Object
        },
        computed:{
            linkable(){
                return !!this.model.pathName
            },
            openable(){
                return !!(this.model.children&&this.model.children.length)
            },
            disable(){
                return !(this.linkable||this.openable)
            }
        },
        methods:{
            toggle(prop){
               this[prop]=!this[prop];
            }
        },
        vuex:{
            actions:{
                addLink
            }
        }
    }
</script>
<style type="text/sass" scoped>
    body {
        background-color: #f0ad4e;
    }
    .link{
        background: deepskyblue;
    }
    .disable{
        cursor: not-allowed;
    }
    .toggle{
        cursor: pointer;
    }
    /* 必需 */
    .expand-transition {
        transition: all .3s ease;
        padding: 20px;
        background-color: #eee;
        overflow: hidden;
        li{
            height: 30px;
        }
    }

    /* .expand-enter 定义进入的开始状态 */
    /* .expand-leave 定义离开的结束状态 */
    .expand-enter, .expand-leave {
        height: 0;
        padding: 0 20px;
        opacity: 0;
        li{
            height: 0;
        }
    }
</style>
