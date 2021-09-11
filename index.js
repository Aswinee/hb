const express = require("express");
const app = express();

const cors = require("cors");
const roomRouter = require("./routes/room.routes");

function loadApp() {
  // Middlewares
  // Enable CORS for all origin
  app.use(cors());

  // Purpose => Parse Request Body
  app.use(express.json());
  app.use("/", roomRouter);

  app.listen(3002, () => console.log(`Server listening at port 3001...`));
}

loadApp();
