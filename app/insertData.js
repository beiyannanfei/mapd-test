/**
 * Created by wyq on 17/9/1.
 */
const client = require("./index");

client().then(sess => {
	let sqlStr = 'insert into wifipix values (106.804220692905,	95.0403826300024, 281), (80.804220692905, 35.0403826300024, 132);';
	sess.query(sqlStr, {}, (err, response) => {
		if (!!err) {
			return console.log("query err: %j", err.message || err);
		}
		return console.log("response: %j", response);
	});
}).catch(err => {
	return console.log("err: %j", err.message || err);
});