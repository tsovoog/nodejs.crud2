import express from "express";
import bcrypt from "bcryptjs";

const app = express();
const port = 8000;

app.listen(port, () => {
  console.log(`run ${port}`);
});
