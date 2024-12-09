require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const contactHandler = require('./api/contact');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json()); 
app.use(cors());

// Define the contact route
app.post('/api/contact', contactHandler);

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
