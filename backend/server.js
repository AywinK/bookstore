import express from "express";
import { sequelize } from './database/index.js';
import { bookRoutes } from "./routes/bookRoutes.js";

const app = express();

sequelize.authenticate(); // testing connection

app.use("/", bookRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));