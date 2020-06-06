const express = require('express');
const app = express();
const PORT: number = 3000;
const opn = require('opn');

app.get('/', (req: Express.Request, res: Express.Response) => {
	res.send(process.env.HTML);
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
	console.log('Opening');
	opn(`http://localhost:${PORT}`);
});
