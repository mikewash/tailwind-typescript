import { getBlog, getSingleTag, getAllTags } from "c:/Users/jose_/Desktop/tailwind-typescript/server/models";
import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";



// Create an instance of Express
const app = express();
app.use(cors())
app.use(express.json()); // For parsing JSON data
app.use(express.urlencoded({ extended: true })); // For parsing URL-encoded data

// Define a route handler
app.get('/', async (req, res) => {
    const databaseObjects = await getBlog(); 
    const databaseObjects2 = await getAllTags();
    res.json({ data: databaseObjects, data2: databaseObjects2 });
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