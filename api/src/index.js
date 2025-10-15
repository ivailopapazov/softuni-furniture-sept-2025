import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    console.log('It Works');
    res.send('It Works!');
});

app.listen(3030, () => 'Server is listening on http://localhost:3030...');

