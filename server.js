// server.js

const express = require('express');
const app = express();
const booksRoutes = require('./routes/booksRoutes');

app.use(express.json());
app.use('/api', booksRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});