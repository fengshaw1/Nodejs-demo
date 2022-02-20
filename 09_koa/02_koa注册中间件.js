const Koa = require("koa");

const app = new Koa();

app.use((ctx, next) => {
  if (ctx.request.url === "/login") {
    if (ctx.request.method === "GET") {
      console.log("到这里来了");
      ctx.response.body = "login success~";
    }
  } else {
    ctx.response.body = "other request~";
  }
});

app.listen(8000, () => {});
