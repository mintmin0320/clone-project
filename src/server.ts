import { AppDataSource } from './data-source';
const express = require('express');
const morgan = require('morgan');
import authRoute from './routes/auth'
const cors = require('cors');

const app = express();
const origin = "http://localhost:3000";
app.use(cors({
  origin
}));

app.use(express.json())
app.use(morgan('dev'));

app.get("/", (_, res) => res.send("running"));
app.use("/api/auth", authRoute);

let port = 4000;
app.listen(port, async () => {
  console.log(`server running at http//localhost:${port}`);

  AppDataSource.initialize().then(() => {
    console.log("Here you can setup and run express / fastify / any other framework.")
  }).catch(error => console.log(error))
})
