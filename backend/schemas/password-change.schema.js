const Joi = require('joi')

const schema = Joi.object({
	email: Joi.string()
		.email({ minDomainSegments: 2 })
		.required(),

	newPassword: Joi.string()
		.required(),

	otp: Joi.string()
		.required(),
})

module.exports = {
	passwordChangeSchema: schema
}
