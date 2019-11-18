const fs = require('fs');
const path = require('path');

const viewsPath = path.resolve(__dirname, '../views');

module.exports = () => {
	return async (ctx, next) => {

		ctx.render = (filename) => {
			ctx.body = fs.createReadStream(`${viewsPath}/${filename}.html`);
			ctx.type = 'text/html';
		};

		await next();

	};
};
