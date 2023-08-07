const Joi = require('joi')

const schema = Joi.object({
	email: Joi.string()
		.email({ minDomainSegments: 2 })
		.required(),
})

module.exports = {
	passwordResetSchema: schema
}
