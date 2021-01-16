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
import Navs from './component/Nav';
import Banner from './index/banner';
import Banner_bottom from './index/banner_bottom';
import Contents from './index/contents';
import Footers from './component/Footer';
// Vue.use(ElementUI);
new Vue({
    el: "#ex",
    data: {},
    components: { Headers, Navs, Banner, Banner_bottom, Contents, Footers },
    template: '<div><Headers /><Navs /><Banner /><Banner_bottom /><Contents /><Footers /></div>',
})