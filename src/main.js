import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
/* eslint-disable no-new */
Vue.use(VueRouter);
const router = new VueRouter();
router.start(App,'#app');
router.map({
    '/:path': {
        component: {
            template: '<div>' +
            '<div v-if="$loadingRouteData">Loading ...</div>'+
            '<div v-else>' +
            '<p>当前路径: {{$route.path}}</p>'+
            '<p>当前路由参数: {{$route.params | json}}</p>'+
            '</div>'+
            '</div>',
            route:{
                data:function ({next,abort}) {
                    setTimeout(next,500);
                }
            }
        }
    },
    '/':{
        component:{
            template:'<div>' +
            '<div v-if="$loadingRouteData">Loading ...</div>'+
            '<div v-else>' +
            '<p>回到主页咯!</p>' +
            '</div>'+
            '</div>',
            route:{
                data:function ({next}) {
                    setTimeout(next,1000);
                }
            }
        }

    }
});
window.router=router;
