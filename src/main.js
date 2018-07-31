// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
import ElementUI from 'element-ui';

// 默认主题
// import 'element-ui/lib/theme-chalk/index.css';

// 红色主题
import './components/common/color/red/index.css';

// f60主题
// import './components/common/color/f60/index.css';

import store from './store/store.js';

Vue.config.productionTip = false

Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})