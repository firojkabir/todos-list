const express = require('express')
const { todoRouter } = require('./todo.route')
const { userRouter } = require('./user.route')
const { albumRouter } = require('./album.route')

const router = express.Router()

router.use('/todos', todoRouter)
router.use('/users', userRouter)
router.use('/albums', albumRouter)

module.exports = {
	router
}