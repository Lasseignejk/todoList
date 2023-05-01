const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

router.post("/create_user", (req, res) => {
	const { username, password, email } = req.body;

	bcrypt.hash(password, 10, async (err, hash) => {
		console.log(err);
		console.log(hash);

		const user = await Users.create({
			username: username,
			password: hash,
			email: email,
			createdAt: new Date(),
			updatedAt: new Date(),
		});
		res.send(user);
	});
});

module.exports = router;
