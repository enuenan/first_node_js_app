import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbDatabase = process.env.DB_DATABASE;
const dbPass = process.env.DB_PASS;

const sequelize = new Sequelize(dbDatabase, dbUser, dbPass, {
    host: dbHost,
    dialect: 'mysql'
});

export default sequelize;
