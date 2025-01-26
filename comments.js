// Create web server
// Create comments array
// Create route to get comments
// Create route to post comments
// Create route to delete comments

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const comments = [];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const { comment } = req.body;
  comments.push(comment);
  res.status(201).json(comment);
});

app.delete('/comments/:id', (req, res) => {
  const { id } = req.params;
  comments.splice(id, 1);
  res.status(204).end();
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// Test the server using Postman
// Test the