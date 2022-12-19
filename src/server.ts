import { AppDataSource } from './data-source';
const express = require('express');
const morgan = require('morgan');
import authRoute from './routes/auth'
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
const origin = "http://localhost:3000";
// const origin = "*";
app.use(cors({
  origin,
  credentials: true
}));

app.use(express.json())
app.use(morgan('dev'));
dotenv.config();

app.get("/", (_, res) => res.send("running"));

app.use("/api/auth", authRoute);

app.listen(process.env.PORT, async () => {
  console.log(`server running at http//localhost:${process.env.PORT}`);

  AppDataSource.initialize().then(() => {
    console.log("Here you can setup and run express / fastify / any other framework.")
  }).catch(error => console.log(error))
})
