const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId
  },
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
});

const Album = mongoose.model("Album", AlbumSchema);

module.exports = { Album };
