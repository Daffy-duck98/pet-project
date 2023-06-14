const todoRouter = require('express').Router();
const { Todo } = require('../db/models');

todoRouter.get('/todo-all-list', async (req, res) => {
  try {
    const todoList = await Todo.findAll({
      order: [
        ['createdAt', 'ASC'],
        ['id', 'ASC'],
      ],
    });
    res.json(todoList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = todoRouter;
