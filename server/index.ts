import express from 'express';
import cors from 'cors';

// Create an instance of Express
const app = express();
app.use(cors())

// Define a route handler
app.get('/', (req, res) => {
    console.log('Hello World!')
    res.json({ message: 'Hello World!' });
});

app.get('/api', (req, res) => {
    console.log('Hello World!')
    res.json({ message: 'Hello World!' });
});

// Start the server
const port = 8080;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});