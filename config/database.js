const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodejs_webapp', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
