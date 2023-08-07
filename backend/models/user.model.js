const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const SALT_FACTOR = 10

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
	validate: validateEmail,
  },
  password: {
	type: String,
	required: false,
  },
  age: {
	type: Number,
	required: true,
  },
  country: {
	type: String,
	required: true,
  }
}, {
	toJSON: {
		transform: function (doc, ret) {
			delete ret.password;
		}
	}
});

UserSchema.pre('save', async function(next) {
	try {
		const salt = await bcrypt.genSalt(SALT_FACTOR)
		this.password = await bcrypt.hash(this.password, salt)
		return next()
	} catch (e) {
		return next(e)
	}
})

UserSchema.pre('findOneAndUpdate', async function() {
	const salt = await bcrypt.genSalt(SALT_FACTOR)
	this._update.password = await bcrypt.hash(this._update.password, salt)
})

UserSchema.methods.validatePassword = function(plainTextPassword) {
	return bcrypt.compareSync(plainTextPassword, this.password)
}

const User = mongoose.model("User", UserSchema);

async function validateEmail(email) {
	const existUser = await User.findOne({ email })

	if (existUser) throw new Error('Email address already exists')
}

module.exports = { User };
