const request = require('request');
const startLoop = setInterval( () => { loopFn() }, 3000);
const stopLoop = () => {clearInterval(startLoop);}

let loopFn = () => {
	request('http://google.com', (err, res, body) => {
		console.log(`statusCode: ${res.statusCode},`);
		try {
			if (body.includes("wait a minute")) {
				console.log('wait a minute!');
				stopLoop();
			}
			else if (body.includes("Sorry")){
				let d = new Date();
				console.log(`sorry. ${d.getTime()}`);
			}
			else {
				console.log(`yay!\nbody: ${body}`);
				stopLoop();
			}
		}//try
		catch(err) {
			console.log(`error: ${err.message},`);
		}// catch
	});//request
}//loopFn