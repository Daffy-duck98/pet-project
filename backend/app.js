require('dotenv').config();

const express = require('express');

const app = express();
const db = require('./db/models');
const config = require('./config/config');

const PORT = process.env.PORT ?? 5000;

config(app);

async function server() {
  try {
    await db.sequelize.authenticate();
    app.listen(PORT, () => {
      console.log(`Server is running at ${PORT}`);
    });
  } catch (err) {
    console.log(err.message);
  }
}
server();
