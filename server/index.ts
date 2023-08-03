import express from 'express';
import cors from 'cors';
import {database} from './database';
import bodyParser from "body-parser";

// Create an instance of Express
const app = express();
app.use(cors())
app.use(express.json()); // For parsing JSON data
app.use(express.urlencoded({ extended: true })); // For parsing URL-encoded data

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
    database.query('SELECT * FROM users', (err, rows) => {
        if (err) {
            console.log('Error: ', err)
            res.status(500).json({ message: 'Internal Server Error' });
            return;
        }
        res.json({ data: rows });
    })
});

// Start the server
const port = 8080;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});