/**
 * Created by Ray on 2016/5/5.
 */
import * as types from './mutation-types'
export const incrementCounter=function ({dispatch,state}) {
    console.log(Object.keys(state))
    dispatch('INCREMENT')
};
export const decrementCounter=function ({dispatch}) {
    dispatch('DECREMENT')
};
export  const updateAmount=function ({dispatch},e) {
    dispatch({
        type:'UPDATEAMOUNT',
        payload:{
            amount:~~e.target.value
        }
    })
};

export const addLink=function ({dispatch},addLink) {
    dispatch(types.ADD_TAB_LINK,addLink);
};
export  const  removeLink=function ({dispatch},index) {
    dispatch(types.REMOVE_TAB_LINK,index);
};

