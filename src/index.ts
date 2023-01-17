import "dotenv/config";
import express from "express";
import cors from "cors";
import db from "./config/mongo";

import itemsRoutes from "./routes";

const app = express();
app.use(cors());
app.use(itemsRoutes);

const PORT = process.env.PORT || 3000;

// conexion a mongo db atlas
db().then(() => console.log('mongodb connected'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
