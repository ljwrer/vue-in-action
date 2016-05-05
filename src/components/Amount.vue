<template>
    <input :value="amountValue" type="number" @change="update" number>
</template>

<script>
    import {getAmount} from './../vuex/getters'
    import {updateAmount} from './../vuex/actions'
    export default{
        data(){
            return{

            }
        },
        vuex:{
            getters:{
                amoutValue:getAmount
            },
            actions:{
                update:updateAmount
            }
        }
    }
</script>
