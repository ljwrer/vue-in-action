/**
 * Created by Ray on 2016/5/5.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const state={
    count:0,
    amount:0
};
const mutations={
    'INCREMENT'(state){
        state.count+=(state.amount===0?1:state.amount);
    },
    'DECREMENT'(state){
        state.count-=(state.amount===0?1:state.amount);
    },
    'UPDATEAMOUNT'(state,amount){
        state.amount=amount
    }
};
const store=new Vuex.Store({
  state,mutations
});
export default store
