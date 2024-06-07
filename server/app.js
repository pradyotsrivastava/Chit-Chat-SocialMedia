import express from "express";
import { connectDB } from "./utils/features.js";
import dotenv from "dotenv";
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser";

import userRoute from "./routes/user.js";
import chatRoute from "./routes/chat.js";

dotenv.config({
  path: "./.env",
});

const mongoURI = process.env.MONGODB_URI;
const port = process.env.PORT || 8080;

connectDB(mongoURI);

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/user", userRoute);
app.use("/chat", chatRoute);

app.get("/", (req, res) => {
  res.send("Hello Home");
});

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
