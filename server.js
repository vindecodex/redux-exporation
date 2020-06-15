const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const todos = [
	{ id: 1, title: 'todo 1', status: true },
	{ id: 2, title: 'todo 2', status: true },
	{ id: 3, title: 'todo 3', status: true },
	{ id: 4, title: 'todo 4', status: true },
	{ id: 5, title: 'todo 5', status: true }
];

app.get('/api/todos', (req, res) => {
	res.json(todos);
});

app.post('/api/todos', (req, res) => {
	const todo = {
		id: req.body.id,
		title: req.body.title,
		status: req.body.status
	};
	todos.push(todo);
	res.json(todo);
});

app.patch('/api/todos/:id', (req, res) => {
	const index = todos.findIndex(todo => todo.id === parseInt(req.params.id));
	todos[index].status = !todos[index].status;
	res.json(todos[index]);
})

app.listen(1234, () => {
	console.log('Running on port 1234');
});
