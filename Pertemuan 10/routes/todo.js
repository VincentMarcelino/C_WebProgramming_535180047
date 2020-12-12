const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.render('pages/todo', { tasks: req.session.tasks });
});

router.post('/add', async (req, res) => {
  if (!req.session.tasks) {
    req.session.tasks = [];
  }

  const newTask = req.body.taskName;
  req.session.tasks.push(newTask);

  res.redirect('/todo');
});

router.post('/done/:index', async (req, res) => {
  const index = req.params.index

  if (req.session.tasks && index < req.session.tasks.length) {
    req.session.tasks.splice(index, 1);
  }

  res.redirect('/todo');
});

module.exports = router;