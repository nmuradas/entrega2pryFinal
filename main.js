const app = require("./server.js");
const { connect } = require("mongoose");

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, async () => {
	await connect('mongodb://127.0.0.1:27017');
	console.log(`Server running on PORT ${PORT}`);
});

server.on('error', err => console.log(err));