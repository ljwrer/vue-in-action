/**
 * Created by Ray on 2016/5/9.
 */
import {ADD_TAB_LINK,REMOVE_TAB_LINK} from '../mutation-types'
const state = {
    treeData: {
        name: 'My Tree',
        children: [
            {name: 'hello', pathName: 'a1'},
            {name: 'wat', pathName: 'a2'},
            {
                name: 'child folder',
                children: [
                    {
                        name: 'child folder',
                        children: [
                            {name: 'hello'},
                            {name: 'wat', pathName: 'c1'}
                        ]
                    },
                    {name: 'hello', pathName: 'b1'},
                    {name: 'wat'},
                    {
                        name: 'child folder',
                        children: [
                            {name: 'hello'},
                            {name: 'wat'}
                        ]
                    }
                ]
            }
        ]
    },
    links:[]
};
const mutations = {
    ADD_TAB_LINK({links},Addlink){
            links.push(Addlink)
    },
    REMOVE_TAB_LINK({links},index){
        links.splice(index,1);
    }
}
export default {
    state,mutations
};
