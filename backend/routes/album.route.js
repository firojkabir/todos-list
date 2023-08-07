const express = require('express')

const { Validator } = require('../middlewares/validator.middleware')
const { albumSchema } = require('../schemas/album.schema')
const { getAllAlbums, getAlbumById, createAlbum, updateAlbumById, deleteAlbumById } = require('../controllers/album.controller')

const router = express.Router()

router.get('/', getAllAlbums)

router.get('/:id', getAlbumById)

router.post('/', Validator(albumSchema), createAlbum)

router.put('/:id', Validator(albumSchema), updateAlbumById)

router.delete('/:id', deleteAlbumById)

module.exports = {
	albumRouter: router
}
