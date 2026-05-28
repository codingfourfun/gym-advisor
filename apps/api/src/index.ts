import express from 'express';
import cors from 'cors';

// Create the Express server instance
const app = express();
// Port number the server will listen on
const PORT = 3001;

// Middleware setup (code that runs before your routes)
app.use(cors());                    // Allows frontend to connect to this backend
app.use(express.json());            // Allows server to read JSON data from requests

// Routes
app.get('/', (req, res) => {        // When someone visits the homepage
  res.json({ message: 'Gym Advisor API is running!' });
});

//Start the server
app.listen(PORT, () => {            // Start listening for requests on port 3001
  console.log(`Server running on http://localhost:${PORT}`);
});