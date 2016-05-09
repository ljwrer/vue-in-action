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
            template: '<p>路径是{{$route.path}}</p>'
        }
    }
})
