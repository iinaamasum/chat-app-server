// package import
const express = require('express');
const cors = require('cors');
require('dotenv').config();
// internal file import
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// server running test at root route
app.get('/', async (_req, res) => {
  res.send({ message: 'chit-chat Server is running :))' });
});

app.listen(port, () => {
  console.log(`server is running at port = ${port}`);
});
