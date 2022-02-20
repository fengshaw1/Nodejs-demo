const Router = require("koa-router");

const router = new Router({prefix: '/users'});

router.get("/", (ctx, next) => {
  ctx.response.body = "users list";
});
router.post("/", (ctx, next) => {
  ctx.response.body = "add user";
});
router.put("/", (ctx, next) => {
  ctx.response.body = "update user";
});
router.delete("/", (ctx, next) => {
  ctx.response.body = "delete user";
});

module.exports = router