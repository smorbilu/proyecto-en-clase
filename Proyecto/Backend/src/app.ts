import express from "express";
import cors from "cors";
import authRoutes from "./interfaces/routes/authRoutes";

export const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Backend funcionando");
});

app.use(authRoutes);