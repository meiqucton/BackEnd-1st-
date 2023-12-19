'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'Address', {// thêm Địa chỉ 
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('users', 'Kg', {// thêm KG
      type: Sequelize.INTEGER,
      allowNull: true
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'Address');
    await queryInterface.removeColumn('users', 'Kg');
    
  },
};
