/**
 * @Description
 * @Author PAN Bruce
 * @Date 2021/8/13
 */

// 1、导入路由vue-router
import VueRouter from "vue-router";
// 2、导入Vue
import Vue from "vue";
// 3、导入路由配置
import config from "./config.js";
// 4、Vue安装vue-router插件
Vue.use(VueRouter);
// 5、创建路由对象
const router = new VueRouter(config);
// 6、导出
export default router;
