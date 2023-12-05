import express from "express";

const app = app.use(express.json())

//startserver
app.listen(process.env.PORT || 3000, () => {
  console.log('listening on the follwing port:', port);
})