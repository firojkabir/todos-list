const express = require('express')

const { getAllTodos, createTodo, getTodoById, updateTodoById, deleteTodoById } = require('../controllers/todo.controller')
const { todoSchema } = require('../schemas/todo.schema')
const { Validator } = require('../middlewares/validator.middleware')

const router = express.Router()

router.get('/', getAllTodos)

router.post('/', Validator(todoSchema), createTodo)

router.get('/:id', getTodoById)

router.put('/:id', Validator(todoSchema), updateTodoById)

router.delete('/:id', deleteTodoById)

module.exports = {
	todoRouter: router
}
