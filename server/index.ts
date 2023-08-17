import { getBlog, getSingleTag, getAllTags, getAllPopular, getCategoryBlogs } from "./models";
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

app.get('/blog/popular', async (req, res) => {
    const databaseobjects = await getAllPopular();
    res.json({data: databaseobjects})
});

app.get('/category/:category', async (req, res) => {
    const { category } = req.params; // Get the dynamic category parameter from the URL
    const databaseObjects = await getCategoryBlogs(category); // Fetch data for the specified category
    res.json({ data: databaseObjects });
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