
class ResponseType {

	html() {
		return 'text/html';
	}

	json() {
		return 'text/json';
	}

}

module.exports = new ResponseType();
