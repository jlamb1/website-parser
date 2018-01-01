const request = require('request');

const startLoop = setInterval( () => { loopFn() }, 10000);
const stopLoop = () => {clearInterval(startLoop);}

let loopFn = () => {
	request('http://google.com', function (error, response, body) {
		console.log('statusCode:', response && response.statusCode);
		try {
			if (body.includes("wait a minute")) {
				console.log('wait a minute!');
				stopLoop();
			}
			else if (body.includes("Sorry")){
				console.log('sorry.');
				let d = new Date();
				console.log(d.getTime());
			}
			else {
				console.log('yay!');
				console.log('body:', body);
				stopLoop();
				console.log('stopped.');
			}
		}//try
		catch(err) {
			console.log('error:', err.message);
		}// catch
	});//request
}//loopFn