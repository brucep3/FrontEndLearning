/**
 * @Description
 * @Author PAN Bruce
 * @Date 2021/8/13
 */

// 推荐的写法二：懒加载
// 导出路由配置
export default {
    // 1、路由模式
    mode: "history",
    // 2、路径配置,数组形式，一个路径对应一个对象
    routes: [
        {
            path: "/",
            component: () => import("@/views/Home.vue"),
        },
        {
            path: "/blog",
            component: () => import("@/views/Blog.vue"),
        },
        {
            path: "/about",
            component: () => import("@/views/About.vue"),
        },
    ],
};

/**
 // 不推荐的写法一
 // 原因：因为如果页面太多，以来就会越多，会导致加载一个页面时
 // 导入页面组件,@代表src目录，编译后代表根路径
 import Home from "@/views/Home.vue";
 import Blog from "@/views/Blog.vue";
 import About from "@/views/About.vue";
 // 导出路由配置
 export default {
    // 1、路由模式
    mode: "history",
    // 2、路径配置,数组形式，一个路径对应一个对象
    routes: [
        {
            path: "/",
            component: Home,
        },
        {
            path: "/blog",
            component: Blog,
        },
        {
            path: "/about",
            component: About,
        },
    ],
};
 */
