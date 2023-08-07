const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  userId: {
	type: mongoose.Schema.Types.ObjectId
  },
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: false,
    default: false,
  },
});

TodoSchema.methods.getPDFContent = function() {
	return `${this._id} - ${this.title} - ${this.completed}`
}

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = { Todo };
