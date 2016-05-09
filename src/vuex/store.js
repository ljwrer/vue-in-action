/**
 * Created by Ray on 2016/5/5.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import tree from './module/tree'
import tab from './module/tab'
Vue.use(Vuex);
const modules={
    tree,tab
};
const state={
    count:0,
    amount:0
};
const mutations={
    INCREMENT(state){
        state.count+=(state.amount===0?1:state.amount);
    },
    DECREMENT(state){
        state.count-=(state.amount===0?1:state.amount);
    },
    UPDATEAMOUNT(state,mutations){
        state.amount=mutations.amount
    }
};
const store=new Vuex.Store({
  state,mutations,modules
});
window.store=store;
export default store
