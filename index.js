import dotenv from 'dotenv';
import express from 'express';
import sequelize from './config/database.js';
import userRoutes from './routes/userRoutes.js';
import checkMobileRequest from './middleware/checkMobileRequest.js';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Get the __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'pages'));
app.use(express.urlencoded({ extended: true }));

app.use(checkMobileRequest); // Apply middleware globally

app.get('/', (req, res) => {
    res.render('Home');
});
app.use('/users', userRoutes);

(async () => {
    try {
        await sequelize.sync();
        console.log('Database connected');
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();
