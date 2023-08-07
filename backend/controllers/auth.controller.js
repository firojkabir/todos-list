const { User } = require('../models/user.model')
const jwt = require("jsonwebtoken")
const { sendWelcomeEmail, sendOTPViaEmail } = require('../services/email.service')
const { generateOTP } = require('../utils/otp.utils')
const { PasswordResetToken } = require('../models/password-reset-token.model')

const login = async (req, res) => {
	const { email, password } = req.body

	try {
		const user = await User.findOne({ email })
		if (user.validatePassword(password)) {
			res.json({
				token: jwt.sign({ userId: user.id }, process.env.JWT_SECRET)
			})
		} else {
			res.status(401).json({
				message: "Invalid email or password"
			})
		}
	} catch (e) {
		console.log(e)
	}
}

const register = async (req, res, next) => {
	const newUser = new User(req.body)

	try {
		const insertedUser = await newUser.save()
		res.status(201).json(insertedUser)
		sendWelcomeEmail(insertedUser)
	} catch(err) {
		err.statusCode = 400
		next(err)
	}
}

const resetPassword = async (req, res) => {
	const { email } = req.body
	const user = await User.findOne({ email })
	if (user) {
		let passwordResetToken = await PasswordResetToken.findOne({ userId: user.id })
		const otp = generateOTP()

		if(passwordResetToken) {
			passwordResetToken.otp = otp
			passwordResetToken.createdAt = Date.now()
		} else {
			passwordResetToken = new PasswordResetToken({ userId: user.id, otp })
		}
		passwordResetToken.save()
		sendOTPViaEmail(user, otp)
		res.json({
			message: "You'll receive an email with otp shortly."
		})
	} else {
		res.status(404).json({
			message: `No user found with the email address '${email}'`
		})
	}
}

const changePassword = async (req, res) => {
	const { email, newPassword } = req.body
	const user = await User.findOne({ email: email })

	if (user) {
		const { otp } = await PasswordResetToken.findOne({ userId: user.id })

		if (otp && otp === req.body.otp) {			
			await User.findByIdAndUpdate(user.id, { password: newPassword })
			res.json({
				message: "Password changed successfully"
			})
		} else {
			res.status(401).json({
				message: "Invalid or expired otp. Please try again."
			})
		}
	} else {
		res.status(404).json({
			message: `No user found with the email address '${email}'`
		})
	}
}

module.exports = {
	login, 
	register,
	resetPassword,
	changePassword
}
