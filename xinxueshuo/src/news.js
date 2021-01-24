import Vue from 'vue';
import { Row, Col, Carousel, CarouselItem,Menu,MenuItem,Submenu } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(Row);
Vue.use(Col);
Vue.use(Carousel);
Vue.use(CarouselItem);
import Headers from './component/Header';
import Navs from './component/Nav';
import Footers from './component/Footer';
new Vue({
    el: "#ex",
    data: {
        imge: [
            { a: "img/1608781879096.png" },
            { a: "img/1591580942683.jpg" },
            { a: "img/1592992689120.jpg" },
            { a: "img/1592992689120.jpg" },
          ],
    },
    components: { Headers, Navs, Footers },
})


