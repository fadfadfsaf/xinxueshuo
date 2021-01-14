import Vue from 'vue';
import { Button, Row, Col, Menu, MenuItem, Submenu } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
// import App from './App'
import Headers from './component/Header'
import Navs from './component/Nav'
import Contents from './component/Contents'
import Footers from './component/Footer'
// Vue.use(ElementUI);
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
new Vue({
    el: "#ex",
    data: {
        names: "asd"
    },
    components: { Headers, Navs,Contents,Footers },
       template: '<div><Headers /><Navs /><Contents /><Footers /></div>'
})