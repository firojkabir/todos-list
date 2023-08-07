const express = require('express')
const { Validator } = require('../middlewares/validator.middleware')
const { userSchema } = require('../schemas/user.schema')
const { passwordResetSchema } = require('../schemas/password-reset.schema')
const { passwordChangeSchema } = require('../schemas/password-change.schema')

const { login, register, resetPassword, changePassword } = require('../controllers/auth.controller')

const router = express.Router()

router.post('/login', login)

router.post('/register', Validator(userSchema), register)

router.post('/reset-password', Validator(passwordResetSchema), resetPassword)

router.post('/change-password', Validator(passwordChangeSchema), changePassword)

module.exports = {
	authRouter: router
}
