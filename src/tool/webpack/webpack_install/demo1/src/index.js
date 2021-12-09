// require("./index.css");
require("./index.scss");

// 热编译
console.log("Hello webpack watched!");

if (process.env.NODE_ENV) {
    console.log("baseurl is localhost");
} else {
    console.log("baseurl is imooc.com");
}
