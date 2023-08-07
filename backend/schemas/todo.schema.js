const Joi = require('joi')

const schema = Joi.object({
	title: Joi.string()
		.min(3)
		.max(20)
		.required(),
	
	completed: Joi.boolean()
})

module.exports = {
	todoSchema: schema
}
