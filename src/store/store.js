import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        themecolor: '20a0ff'
    },
    mutations: {
        setThemeColor(state, curcolor) {
            this.state.themecolor = curcolor;
        }
    }
});
export default store;