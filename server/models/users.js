"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Users extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Users.hasMany(models.Notes, {
				foreignKey: "userId",
			});
		}
	}
	Users.init(
		{
			username: DataTypes.STRING,
			password: DataTypes.STRING,
			nickname: DataTypes.STRING,
			email: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Users",
		}
	);
	return Users;
};
