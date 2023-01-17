import "dotenv/config";
import express from "express";
import cors from "cors";

import itemsRoutes from "./routes";

const app = express();
app.use(cors());
app.use(itemsRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
