/**
 * Created by wyq on 17/9/4.
 */
const client = require("./index");

const exampleVega = {
	"width": 384,
	"height": 564,
	"data": [
		{
			"name": "tweets",
			"sql": "SELECT lon as x, lat as y FROM wifipix"
		}
	],
	"scales": [
		{
			"name": "x",
			"type": "linear",
			"domain": [
				-3650484.1235206556,
				7413325.514451755
			],
			"range": "width"
		},
		{
			"name": "y",
			"type": "linear",
			"domain": [
				-5778161.9183506705,
				10471808.487466192
			],
			"range": "height"
		}
	],
	"marks": [
		{
			"type": "points",
			"from": {
				"data": "tweets"
			},
			"properties": {
				"x": {
					"scale": "x",
					"field": "x"
				},
				"y": {
					"scale": "y",
					"field": "y"
				},
				"fillColor": "blue",
				"size": {
					"value": 3
				}
			}
		}
	]
};

client().then(sess => {
	sess.renderVega(1, JSON.stringify(exampleVega), {}, function (err, result) {
		if (!!err) {
			return console.log("renderVega err: %j", err.message || err);
		}
		console.log("result: %j", result);
		let blobUrl = `data:image/png;base64,${result.image}`;
		return console.log("blobUrl: %j", blobUrl);
	});
}).catch(err => {
	return console.log("err: %j", err.message || err);
});
