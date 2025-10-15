import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose'
import 'dotenv/config';

import routes from './routes.js';
import { authMiddleware } from './middlewares/authMiddleware.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

// Setup mongoose
try {
    await mongoose.connect('mongodb://localhost:27017', {
        dbName: 'furniture-sept-2025',
    });

    console.log('Successfully connected to DB!');
} catch (err) {
    console.error('Cannot connet to db!');
    console.error(err.message);
}

// Add CORS
app.use(cors());

// Add json parser
app.use(express.json());

// Add auth middleware
app.use(authMiddleware);

// Add routes
app.use(routes);

// Add global error handler
app.use(errorHandler);

app.listen(3030, () => 'Server is listening on http://localhost:3030...');

