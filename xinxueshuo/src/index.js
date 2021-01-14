import Vue from 'vue';
import { Button, Row, Col, Menu, MenuItem, Submenu,Carousel,CarouselItem } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
// import App from './App'
import Headers from './component/Header';
import Navs from './component/Nav';
import Banner from './index/banner';
import Footers from './component/Footer';
// Vue.use(ElementUI);
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(Carousel);
Vue.use(CarouselItem);
new Vue({
    el: "#ex",
    data: {},
    components: { Headers, Navs,Banner,Footers },
       template: '<div><Headers /><Navs /><Banner /><Footers /></div>'
})