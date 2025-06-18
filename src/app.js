import express from 'express';
import cookieParser from 'cookie-parser';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// router imports
import healthCheckRouter from './routes/healthcheck.routes.js';
import userRoutes from './routes/auth.routes.js';

app.use("/api/v1/healthcheck", healthCheckRouter);
app.use("/api/v1/users", userRoutes);
export default app;
