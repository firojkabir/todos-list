const mongoose =  require('mongoose')

const PasswordResetTokenSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	otp: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now,
		expires: 300,
	}
})

const PasswordResetToken = mongoose.model('PasswordResetToken', PasswordResetTokenSchema)

module.exports = { PasswordResetToken }
