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
import Abouts from './About.vue';
import Navs from './component/Nav';
import Footers from './component/Footer';
new Vue({
    el: "#ex",
    data: {},
    components: { Headers, Navs, Abouts, Footers },
    template: '<div><Headers /><Navs /><Abouts /><Footers /></div>',
})