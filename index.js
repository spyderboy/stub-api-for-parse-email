const express = require('express');
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// POST route to handle incoming data
app.post('/submit', (req, res) => {
  const { title, description, url, senderEmail } = req.body;

  // Basic validation
  if (!title || !description || !url || !senderEmail) {
    return res.status(400).json({ message: 'All fields are required.' });
  }
  console.log(`Title: ${title}`);
  console.log(`Title: ${description}`);
  console.log(`Title: ${url}`);
  console.log(`Title: ${senderEmail}`);
  // For now, let's assume the process is successful
  res.status(200).json({ message: 'Success', data: { title, description, url, senderEmail } });
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
