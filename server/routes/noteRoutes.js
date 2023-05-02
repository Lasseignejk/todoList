const express = require("express");
const router = express.Router();
const { Notes } = require("../models");

router.get("/all_notes", async (req, res) => {
	const { userId } = req.body;
	const notes = await Notes.findAll({
		where: {
			userId: userId,
		},
	});
	res.send(notes);
});

router.post("/new_note", async (req, res) => {
	const { contents, userId } = req.body;

	const note = await Notes.create({
		contents,
		userId,
		createdAt: new Date(),
		updatedAt: new Date(),
	});
	res.send(note);
});

router.post("/update_note", async (req, res) => {
	const { contents, id } = req.body;

	const note = await Notes.update(
		{ contents: contents },
		{
			where: {
				id: id,
			},
		}
	);
	res.send(note);
});

module.exports = router;
