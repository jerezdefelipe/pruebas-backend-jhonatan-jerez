import express from 'express';
import bodyParser from 'body-parser';
import booksRoutes from './src/routes/books.routes.js';

const app = express();
app.use(bodyParser.json());
app.use('/libros', booksRoutes);

export default app;