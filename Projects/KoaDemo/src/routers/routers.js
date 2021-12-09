const combineRouters = require("koa-combine-routers");

const aRouters = require("./aRouter");
const bRouters = require("./bRouter");

module.exports = combineRouters(
  aRouters,
  bRouters,
);
