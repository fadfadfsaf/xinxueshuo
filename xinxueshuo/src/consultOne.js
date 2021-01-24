import Vue from 'vue';
import { Button, Row, Col, Menu, MenuItem, Submenu, Carousel, CarouselItem } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
// import App from './App'

Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(Carousel);
Vue.use(CarouselItem);
import Headers from './component/Header';
// import Contents from './component/Contents';
import Navs from './component/Nav';
import Footers from './component/Footer';
// Vue.use(ElementUI);
new Vue({
    el: "#ex",
    data: {},
    components: { Headers, Navs, Footers },
    // template: '<div><Headers /><Navs /><Footers /></div>',
})