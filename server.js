import express from "express";
import cors from "cors";
import eventRoutes from "./routes/events.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/events", eventRoutes);

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
