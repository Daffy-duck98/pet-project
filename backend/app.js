require('dotenv').config();

const express = require('express');

const app = express();
const db = require('./db/models');
const config = require('./config/config');

const PORT = process.env.PORT ?? 3000;

config(app);

const authRouter = require('./routes/auth.routes');
const todoRouter = require('./routes/todo.routes');

app.use('/api/auth', authRouter);
app.use('/api/todo', todoRouter);

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
