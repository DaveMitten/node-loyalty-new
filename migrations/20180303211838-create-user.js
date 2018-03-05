'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
	  },
	  last_name: {
        type: Sequelize.STRING
	  },
	  email: {
        type: Sequelize.STRING
	  },
	  date_of_birth: {
        type: Sequelize.DATE,
	  },
	  type: {
        type: Sequelize.STRING,
	  },
	  created_at: {
        type: Sequelize.DATE,
	  },
	  phone: {
        type: Sequelize.INTEGER,
	  },
	createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
	  }

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};