import { Router } from "express";
import {
  deleteItems,
  getItem,
  getItems,
  postItems,
  updateItems,
} from "../controllers/item";

const router = Router();

/**
 * * http://localhost:3000/items 
 */
router.get("/:id", getItem);
router.get("/", getItems);
router.post("/", postItems);
router.put("/:id", updateItems);
router.delete("/:id", deleteItems);

export { router };
