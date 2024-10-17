import express from "express";
import mongoose from "mongoose";
import { mongodbURL } from "./config.js";
import todoRoutes from "./routes/todo.routes.js"; 

const port = 5000;
const app = express();

app.use(express.json());

mongoose.connect(mongodbURL)
  .then(() => {
    console.log('Connected with mongoose');

    app.use("/todos", todoRoutes);
    
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log('Error connecting to database:', error);
  });
