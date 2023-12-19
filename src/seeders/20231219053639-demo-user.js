'use strict';
require('dotenv').config();// muốn sử dụng env thì BẮT BUỘC phải khai báo cái này

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      firstName: process.env.DB_firstName,
      lastName: process.env.DB_lastName,
      email: process.env.DB_email,
      Age: process.env.DB_Age,
   
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};