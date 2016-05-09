/**
 * Created by Ray on 2016/5/9.
 */
import {ACTIVE_LINK} from '../mutation-types'
const state = {
    activeLink:0
};
const mutations = {
    ACTIVE_LINK(state,index){
        state.activeLink=index;
    }
}
export default {
    state,mutations
};
