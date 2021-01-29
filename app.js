const app = require('express')();
// const https = require('https');
// const server = https.createServer(app);
const port = process.env.PORT || 3000;

/** To inspect using the Chrome developer tool...
 *  @action --inspect: let you inspect using the chrome developer tool
 *  @action --debug-brk: break the code before the program runs
 *  @code node --debug-brk --inspect app.js
 */

app.get('/', (req, res) => {
	debugger;
	res.send('It works');
});

app.listen(port, () => console.log(`Listening on PORT: ${port}`));
