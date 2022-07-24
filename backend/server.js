import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import userRouter from './routers/userRouter.js';

const app = express();

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazona', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.get('/api/products/:id', (req, res) => {
    // eslint-disable-next-line no-underscore-dangle
    const product = data.products.find((x) => x._id === req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product not Found' });
    }
});

app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use((err, req, res) => {
    res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5001;

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Serve at http://localhost:${port}`);
});
