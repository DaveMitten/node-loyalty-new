'use strict';

//created the basic model using sequelize to generate the data for a user
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
	first_name: DataTypes.STRING,
	last_name: DataTypes.STRING,
	email: DataTypes.STRING,
	date_of_birth: DataTypes.DATE,
	type: DataTypes.STRING,
	created_at: DataTypes.DATE,
	phone: DataTypes.INTEGER
	}, {});
  
	User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};

