import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.post('/register', (req: Request, res: Response) => {
    const { username, password } = req.body;
    res.send('User registered');
});

app.post('/login', (req: Request, res: Response) => {
    const { username, password } = req.body;
    res.send('User logged in');
});

app.post('/products', (req: Request, res: Response) => {
    const { name, price } = req.body;
    res.send('Product added');
});

app.get('/products', (req: Request, res: Response) => {
    res.send('List of products');
});

app.post('/orders', (req: Request, res: Response) => {
    const { productId, quantity } = req.body;
    res.send('Order created');
});

app.get('/orders', (req: Request, res: Response) => {
    res.send('List of orders');
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
