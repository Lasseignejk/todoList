const express = require("express");
const router = express.Router();
const { Notes } = require("../models");

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

module.exports = router;
