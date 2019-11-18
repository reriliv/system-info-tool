const os = require('os');
const reponseType = require(`${global.rootPath}/utils/response-type`);

module.exports = {
	'GET /v1/os/userInfo': (ctx) => {
		ctx.body = os.userInfo();
		ctx.type = reponseType.json();
	},
	'GET /v1/os/cpus': (ctx) => {
		ctx.body = os.cpus();
		ctx.type = reponseType.json();
	},
};
