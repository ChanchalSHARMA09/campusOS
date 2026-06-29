import express from "express";
import errorHandler from "./middlewares/error.middleware.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(express.json());

app.use("/api/v1/auth",authRoutes);

app.get("/api/v1/health", (req, res) => {
  res.status(200).json({
    status: true,
    message: "campusOS api is running",
  });
});

app.use(errorHandler);

export default app;
