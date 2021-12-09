<template>
    <!-- 头部菜单 -->
    <div class="header">
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-link to="/">首页</router-link>
        <router-link to="/blog">博客</router-link>
        <router-link to="/about">关于我们</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
    width:1000px;
    margin:0 auto;
    height:80px;
    background:black;
    display:flex;
    justify-content: center;
    align-items:center;
}
.header a{
    font-size:18px;
    text-decoration: none;
    color:white;
    margin:0 10px;
}
</style>
