import VueRouter from 'vue-router'
import Vue from "vue";
Vue.use(VueRouter);

import routes from "./routes";

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;