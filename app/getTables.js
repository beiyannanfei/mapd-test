/**
 * Created by wyq on 17/9/1.
 */
const client = require("./index");

client().then(sess => {
	sess.getTables((err, response) => {
		if (!!err) {
			return console.log("getTables err: %j", err.message || err);
		}
		return console.log("response: %j", response);
	});
}).catch(err => {
	return console.log("err: %j", err.message || err);
});