import Vue from 'vue'
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        num: 100
    },
    mutations: {
        plus(state) {
            this.state.num = this.state.num + 1;
        },
        minus(state) {
            this.state.num = this.state.num - 20;
        },
    },
    actions: {
        //actions中进行异步操作
        actionMinus(context) {
            setTimeout(
                () => {
                    context.commit('minus')
                }
                , 1000)
        }
    },
    getters: {
        getNum(state) {
            return state.num > 0 ? state.num : 0
        }
    }
})