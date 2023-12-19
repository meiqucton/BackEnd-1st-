'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'phone', {// Thêm SDT
      type: Sequelize.STRING,
      allowNull: true,
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'Phone');
   
    
  },
};
