const express = require('express');
const app = express();
const fs = require('fs');

// Read the JSON data file
const jsonData = JSON.parse(fs.readFileSync('data.json'));

// GET endpoint with filtering options
app.get('/data', (req, res) => {
  const filters = req.query;
  const filteredUsers = jsonData.filter(user => {
    let isValid = true;
    for (key in filters) {
      isValid = isValid && user[key] == filters[key];
    }
    return isValid;
  });
  res.send(filteredUsers);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});