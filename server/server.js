const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

nunjucks.configure('./client', {
	autoescape: true,
	express: app
});

app.get('/', (req, res) => {
	res.render('index.html', { date: new Date() });
})

app.listen(7777, '0.0.0.0', () => {
	console.log('Server started on port 777 by B[]br!k');
});

