const express = require('express')

const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../controllers/user.controller')
const { Validator } = require('../middlewares/validator.middleware')
const { userSchema } = require('../schemas/user.schema')

const router = express.Router()

router.get('/', getAllUsers)

router.get('/:id', getUserById)

router.put('/:id', Validator(userSchema), updateUserById)

router.delete('/:id', deleteUserById)

module.exports = {
	userRouter: router
}
