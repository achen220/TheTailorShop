import express from "express";
import dotenv from 'dotenv';
// import pdf from "pdf-parse";
import aiRouter from "./routes/aiRoute.js";
import fileUpload from "express-fileupload";

dotenv.config();

const app = express();
app.use(express.json());
app.use(fileUpload());

app.use('/api',aiRouter)

//catchall unknown route
app.get('*', (req, res) =>  {
  res.status(404).json('<h1>catch-all route handler activated</h1>');
});

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'global error handler invoked' },
  }
  const errorObj = Object.assign(defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

//startserver
app.listen(process.env.PORT || 3000, () => {
  console.log('listening on the follwing port:', process.env.PORT);
})