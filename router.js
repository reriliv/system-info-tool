const path = require('path');
const fs = require('fs');
const Route = require('koa-router');

const controllerPath = path.resolve(__dirname, 'controllers');

const router = new Route();

const actions = new Map([
	['GET', (...args) => {
		router.get(...args);
	}],
	['POST', (...args) => {
		router.post(...args);
	}],
	['PUT', (...args) => {
		router.put(...args);
	}],
	['DELETE', (...args) => {
		router.delete(...args);
	}],
]);

const loadRoute = (module) => {
	const moduleKeys = Object.keys(module);
	moduleKeys.map(key => {
		const [method, url] = key.split(' ');
		const action = actions.get(method);
		action(url, module[key]);
	})
};

const mapDir = (dirPath) => {
	fs.readdirSync(dirPath).map(dir => {
		if (dir.includes('.js')) {
			const module = require(`${dirPath}/${dir}`);
			loadRoute(module);
		} else {
			mapDir(`${dirPath}/${dir}`);
		}
	});
};

module.exports = () => {

	mapDir(controllerPath);

	return router;

};
