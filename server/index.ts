import express from 'express';
import cors from 'cors';

// Create an instance of Express
const app = express();
app.use(cors())

// Define a route handler
app.get('/', (req, res) => {
    const databaseObjects = [
        {id: 1, name: 'Jose'},
        {id: 2, name: 'Breanna' },
        {id: 3, name: 'Juan' },
        {id: 4, name: 'Mike' },
    ]
    res.json({ data: databaseObjects });
});

app.get('/api', (req, res) => {
    console.log('Hello World!')
    res.json({ message: 'Hello World!' });
});

app.post('/sign-in', (req, res) => {
    console.log('Body: ', req.body)
    res.json({ message: 'We got it' });
});

// Start the server
const port = 8080;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});