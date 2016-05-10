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
const store=new Vuex.Store({
  modules
});
window.store=store;
export default store
