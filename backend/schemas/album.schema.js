const Joi = require('joi')

const schema = Joi.object({
	title: Joi.string()
		.min(3)
		.max(20)
		.required(),
	
	artist: Joi.string()
		.min(3)
		.max(20)
		.required(),
})

module.exports = {
	albumSchema: schema
}
