const { Todo } = require('../models/todo.model')
const { sendEmailForNewTodo, sendTodoViaEmail, sendTodolistViaEmail } = require('../services/email.service')
const { generateTodoPDF, generateTodoListPDF } = require('../utils/pdf.util')

const getAllTodos = async (req, res) => {
	const todos = await Todo.find({
		userId: req.userId
	})
	res.json(todos)
	generateTodoListPDF(todos, req.user)
	sendTodolistViaEmail(req.user)
}

const getTodoById = async (req, res) => {
	const { id } = req.params
	
	try {
		const todo = await Todo.findById(id)
		if (todo && todo.userId == req.userId) {
			res.json(todo)
			generateTodoPDF(todo)
			sendTodoViaEmail(req.user, todo)
		} else {
			res.status(404).json({
				message: `No todo found with id '${id}'`
			})
		}
	} catch (e) {
		res.status(400).json({
			message: `Invalid id '${id}'`
		})
	}
}

const createTodo = async (req, res, next) => {
	const newTodo = new Todo({ ...req.body, userId: req.userId })
	const insertedTodo = await newTodo.save()
	res.status(201).json(insertedTodo)
	sendEmailForNewTodo(req.user, insertedTodo)
}

const updateTodoById = async (req, res) => {
	const { id } = req.params;

	try {
		const todo = await Todo.findById(id)
		if (todo && todo.userId == req.userId) {
			await Todo.findByIdAndUpdate(id, req.body)
			const updatedTodo = await Todo.findById(id)
			res.status(200).json(updatedTodo);
		} else {
			res.status(404).json({
				message: `No todo found with id '${id}'`
			})
		}
	} catch (e) {
		res.status(400).json({
			message: `Invalid id '${id}'`
		})
	}
}

const deleteTodoById = async (req, res) => {
	const { id } = req.params

	try {
		const todo = await Todo.findById(id)
		if (todo && todo.userId == req.userId) {
			const deletedTodo = await Todo.findByIdAndDelete(id)
			res.status(200).json(deletedTodo)
		} else {
			res.status(404).json({
				message: `No todo found with id '${id}'`
			})
		}
	} catch (e) {
		res.status(400).json({
			message: `Invalid id '${id}'`
		})
	}
}

module.exports = {
	getAllTodos, 
	createTodo, 
	getTodoById, 
	updateTodoById, 
	deleteTodoById
}
