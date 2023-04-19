require('dotenv').config();
const express = require('express');

const { PORT } = process.env;
const app = express();

app.listen(PORT, () => {
  console.log(`Server rabora on port ${PORT}`);
});
