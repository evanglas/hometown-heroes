import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import heroRoutes from './routes/heroRoutes.js';
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('Hi!');
});

app.use('/heroes', heroRoutes);

mongoose.connect(mongoDBURL).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log('Server is running on port ' + PORT);
    });
}).catch((err) => {
    console.log(err);
});