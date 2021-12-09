// const koa = require("koa");
// const path = require("path");
// const helmet = require("koa-helmet");
// const router = require("./routers/routers");
// const statics = require("koa-static");

// ES6 语法
import koa from "koa";
import path from "path";
import helmet from "koa-helmet";
import statics from "koa-static";
import router from "./routers/routers";

const app = new koa();

app.use(helmet());
app.use(statics(path.join(__dirname, "../public")));
app.use(router());

app.listen(3000);

