import express from "express";
import { sequelize } from './database/index.js';
import { bookRoutes } from "./routes/bookRoutes.js";
import { categoryRoutes } from "./routes/categoryRoutes.js";
import cors from "cors";
const app = express();

app.use(cors());

sequelize.authenticate(); // testing connection

app.get("/", (req, res) => res.send("hello world"));

app.use("/", bookRoutes);
app.use("/", categoryRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

export { app };