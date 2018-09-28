import router from 'vue-router'
import Vue from 'vue'
import Hello from '../components/Hello'
import HelloWorld from '../components/HelloWorld'

Vue.use(router);
export default new router({
    routes: [
        { path: '/hello/:xxx', name: 'hello', component: Hello },
        { path: '/helloworld/:yyy', name: 'helloworld', component: HelloWorld },

    ]
})