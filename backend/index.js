import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import logger from "./src/utils/logger.js";
import { userRouter } from "./src/routes/user.route.js";
import path from "path";

import { connectDb } from "./src/db/connect.js";

// EXPRESS APP
const app = express();

// MIDDLEWARES
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// DIRECTORY NAME FOR DEPLOYMENT
const _dirname = path.resolve();

// LOGGER FOR API'S ( CURRENTLY COMMENTED BECAUSE OF STORAGE ISSUE )
// const morganFormat = ":method :url :status :response-time ms";
// app.use(
//   morgan(morganFormat, {
//     stream: {
//       write: (message) => {
//         const logObject = {
//           method: message.split(" ")[0],
//           url: message.split(" ")[1],
//           status: message.split(" ")[2],
//           responseTime: message.split(" ")[3],
//         };
//         logger.info(JSON.stringify(logObject));
//       },
//     },
//   })
// );

// ROUTES
app.use("/api/v1/users", userRouter);

// PORT
const PORT = process.env.PORT || 3000;

// FOR DEPLOYMENT
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(_dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
  });
}

// APP LISTINING
connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server started on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
