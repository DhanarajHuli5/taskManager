import express from 'express';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router imports
import healthCheckRouter from './routes/healthcheck.routes.js';
import userRoutes from './routes/auth.routes.js';

app.use("/api/v1/healthcheck", healthCheckRouter);
app.use("/api/v1/auth", userRoutes);
export default app;
