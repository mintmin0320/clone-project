import { AppDataSource } from './data-source';
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.json())
app.use(morgan('dev'));

app.get("/", (_, res) => res.send("running"));

let port = 4000;
app.listen(port, async () => {
  console.log(`server running at http//localhost:${port}`);

  AppDataSource.initialize().then(() => {
    console.log("Here you can setup and run express / fastify / any other framework.")
  }).catch(error => console.log(error))
})
