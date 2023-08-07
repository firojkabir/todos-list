const { User } = require('../models/user.model')

const getAllUsers = async (req, res) => {
	const users = await User.find()
	res.json(users)
}

const getUserById = async (req, res) => {
	const { id } = req.params

	try {
		const user = await User.findById(id)
		if (user) {
			res.json(user)
		} else {
			res.status(404).json({
				message: `No user found with id '${id}'`
			})
		}
	} catch (e) {
		res.status(400).json({
			message: `Invalid id '${id}'`
		})
	}
}

const updateUserById = async (req, res) => {
	const { id } = req.params

	try {
		const user = await User.findById(id)
		if (user) {
			await User.findByIdAndUpdate(id, req.body)
			const updatedUser = await User.findById(id)
			res.status(200).json(updatedUser)
		} else {
			res.status(404).json({
				message: `No user found with id '${id}'`
			})
		}
	} catch (e) {
		res.status(400).json({
			message: `Invalid id '${id}'`
		})
	}
}

const deleteUserById = async (req, res) => {
	const { id } = req.params

	try {
		const deletedUser = await User.findByIdAndDelete(id)
		if (deletedUser) {
			res.status(200).json(deletedUser)
		} else {
			res.status(404).json({
				message: `No user found with id '${id}'`
			})
		}
	} catch (e) {
		res.status(400).json({
			message: `Invalid id '${id}'`
		})
	}
}

module.exports = {
	getAllUsers,
	getUserById,
	updateUserById,
	deleteUserById
}
