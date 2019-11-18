const Koa = require('koa');
const path = require('path');
const Static = require('koa-static');

const app = new Koa();

const rootPath = path.resolve(__dirname, './');

global.rootPath = rootPath;

const router = require('./router');

const render = require('./plugins/render');

app.use(async (ctx, next) => {
	await next();
	console.log(ctx.method, ctx.url);
});

app.use(render());

app.use(Static(`${rootPath}/public`));

app.use(router.routes());

app.listen(3000, () => {
	console.log('Server running at http://localhost:3000');
});
