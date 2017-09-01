/**
 * Created by wyq on 17/9/1.
 */
const Bluebird = require("bluebird");
const MapdCon = require("../lib/node-connector.js");

module.exports = function () {
	return new Bluebird((resolve, reject) => {
		new MapdCon().protocol("http")
			.host("127.0.0.1")
			.port('9090')
			.dbName('mapd')
			.user('mapd')
			.password('HyperInteractive')
			.connect((err, session) => {
				if (!!err) {
					return reject(err);
				}
				return resolve(session);
			});
	});
};
