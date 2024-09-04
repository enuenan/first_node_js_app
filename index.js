const express = require('express');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const checkMobileRequest = require('./middleware/checkMobileRequest');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(checkMobileRequest); // Apply middleware globally

app.use('/users', userRoutes);

(async () => {
    try {
        await sequelize.sync();
        console.log('Database connected');
        app.listen(3000, () => console.log('Server running on http://localhost:3000'));
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();
