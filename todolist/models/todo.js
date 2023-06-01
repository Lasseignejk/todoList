import mongoose, { Schema, model, models } from "mongoose";

const TodoSchema = new Schema({
	creator: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	todo: {
		type: String,
		required: [true, "Todo is required."],
	},
	completed: {
		type: Boolean,
	},
});

const Todo = models.Todo || model("Todo", TodoSchema);

export default Todo;
