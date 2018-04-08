const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = "wosome"
});

app.use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(process.env.port || 8080);