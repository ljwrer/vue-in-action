/**
 * Created by Ray on 2016/5/5.
 */
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
