/**
 * Created by wyq on 17/9/1.
 */
const client = require("./index");

client().then(sess => {
	let sqlStr = 'select * from wifipix;';
	sess.query(sqlStr, {}, (err, response) => {
		if (!!err) {
			return console.log("query err: %j", err.message || err);
		}
		console.log(response[0].number);
		return console.log(parseInt(response[0].number));
	});
}).catch(err => {
	return console.log("err: %j", err.message || err);
});