import express from 'express';

// Create an instance of Express
const app = express();

// Define a route handler
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
const port = 8080;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});