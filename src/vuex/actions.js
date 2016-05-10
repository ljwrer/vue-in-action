/**
 * Created by Ray on 2016/5/5.
 */
import * as types from './mutation-types'
const router=window.router;
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

export const addLink=function ({dispatch,state:{tree:{links}}},addLink) {
    const index=links.findIndex(link=>link.pathName === addLink.pathName);
    if(index<0){
        dispatch(types.ADD_TAB_LINK,addLink);
        dispatch(types.ACTIVE_LINK,links.length-1);
    }else {
        dispatch(types.ACTIVE_LINK,index);
    }
};
export  const  removeLink=function ({dispatch,state:{tab:{activeLink},tree:{links}}},index) {
    dispatch(types.REMOVE_TAB_LINK,index);
    if(activeLink === index){
        const tarIndex=index>0?index-1:0
        dispatch(types.ACTIVE_LINK,tarIndex);
        if(links.length){
            router.go(links[tarIndex].pathName)
        }else {
            router.go("/");
        };
    }else if(activeLink>index){
        dispatch(types.ACTIVE_LINK,activeLink-1);
    }
};
export const activeLink=function ({dispatch},index) {
    dispatch(types.ACTIVE_LINK,index);
};
