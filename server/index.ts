import { getBlog, getSingleTag, getAllTags } from "./models";
import express from 'express';
import cors from 'cors';
// import {getUsers} from "./model";



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

app.post('/sign-in', async (req, res) => {
    console.log('Body: ', req.body)
    // This is just an example change this to your own logic so you can sign into the app
    const rows = []
    res.json({data: rows});
});

// Start the server
const port = 8080;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});