const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('firts', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

const connectdtb = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = connectdtb;
