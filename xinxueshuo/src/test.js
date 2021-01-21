import Vue from 'vue';
// import Test from './component/test'


new Vue({
    el: "#ex",
    data: {
        week:["周日","周一","周二","周三","周四","周五","周六",],
        data: [
            {
                date: "2021-01-03T00:00:00Z",
                tasks: [
                    { title: "待办事项1", datetime: "2021-01-03T13:28:11.622Z" },
                ],
            },
            { date: "2021-01-04T00:00:00Z", tasks: [] },
            {
                date: "2021-01-05T00:00:00Z",
                tasks: [
                    { title: "待办事项2", datetime: "2021-01-05T01:14:12.304Z" },
                ],
            },
            {
                date: "2021-01-06T00:00:00Z",
                tasks: [
                    { title: "待办事项3", datetime: "2021-01-06T09:50:12.618Z" },
                ],
            },
        ],
    },
    // template: '',
})