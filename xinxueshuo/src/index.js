import Vue from 'vue';
import { Row, Col,Carousel, CarouselItem } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
Vue.use(Row);
Vue.use(Col);
Vue.use(Carousel);
Vue.use(CarouselItem);
import Banner from './index/banner';
import Banner_bottom from './index/banner_bottom';
import Dynamic from './index/Dynamic';
import Business from './index/Business';
import Paper from './index/Paper';
// Vue.use(ElementUI);
new Vue({
    el: "#ex",
    data: {},
    components: { Banner, Banner_bottom, Dynamic, Business, Paper },
    // template: '<div><Headers /><Navs /><Banner /><Banner_bottom /><Dynamic /><Paper /><Business /><Footers /></div>',
})