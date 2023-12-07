import express from "express";
import aiController from "../controllers/aiController.js";
const aiRouter = express.Router()

aiRouter.post('/', (req,res) => {
  res.status(200).json("dwqdwq")
})

export default aiRouter;