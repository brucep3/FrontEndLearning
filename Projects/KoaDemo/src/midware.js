/**
 * @Description Koa 中间件 Demo
 * @Author PAN Bruce
 * @Date 2021/10/28
 */
const Koa = require("koa");

const app = new Koa();
const middleware = function async (ctx, next) {
    console.log("This is a a middleware!");
    // next();
};

const middleware1 = function async (ctx, next) {
    console.log("This is a a middleware1!");
    next();
    console.log("This is a a middleware1 ending!");
};

const middleware2 = function async (ctx, next) {
    console.log("This is a a middleware2");
    next();
    console.log("This is a a middleware2 ending!");
};

app.use(middleware1);
app.use(middleware2);
app.use(middleware);

app.listen(3000);
