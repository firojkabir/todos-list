const { Album } = require('../models/album.model')

const getAllAlbums = async (req, res) => {
	const albums = await Album.find({
		userId: req.userId
	})
	res.json(albums)
}

const getAlbumById = async (req, res) => {
	const { id } = req.params

	try {
		const album = await Album.findById(id)
		if (album && album.userId == req.userId) {
			res.json(album)
		} else {
			res.status(404).json({
				message: `No album found with id '${id}'`
			})
		}
	} catch (e) {
		res.status(400).json({
			message: `Invalid id '${id}'`
		})
	}
}

const createAlbum = async (req, res) => {
	const newAlbum = new Album({ ...req.body, userId: req.userId })
	const insertedAlbum = await newAlbum.save()
	res.status(201).json(insertedAlbum)
}

const updateAlbumById = async (req, res) => {
	const { id } = req.params

	try {
		const album = await Album.findById(id)
		if (album && album.userId == req.userId) {
			await Album.findByIdAndUpdate(id, req.body)
			const updatedAlbum = await Album.findById(id)
			res.status(200).json(updatedAlbum)
		} else {
			res.status(404).json({
				message: `No album found with id '${id}'`
			})
		}
	} catch (e) {
		res.status(400).json({
			message: `Invalid id '${id}'`
		})
	}
}

const deleteAlbumById = async (req, res) => {
	const { id } = req.params

	try {
		const deletedAlbum = await Album.findByIdAndDelete(id)
		if (deletedAlbum) {
			res.status(200).json(deletedAlbum)
		} else {
			res.status(404).json({
				message: `Album not found with id ${id}`
			})
		}
	} catch (e) {	
		res.status(400).json({
			message: `Invalid ${id}`
		})
	}
}

module.exports = {
	getAllAlbums,
	getAlbumById,
	createAlbum,
	updateAlbumById,
	deleteAlbumById
}
