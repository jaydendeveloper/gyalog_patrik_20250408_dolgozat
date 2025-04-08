import { Router } from "express";
import { flowers } from "../lib/flowers.js";
import {
  deleteFlower,
  getFlowersById,
  postFlower,
  putFlower,
} from "../controllers/controllers.js";

export const router = Router();

router.get("/flowers", (req, res) => {
  res.status(200).json(flowers);
});

router.get("/flowers/:id", getFlowersById);

router.post("/flowers", postFlower);

router.put("/flowers/:id", putFlower);

router.delete("/flowers/:id", deleteFlower);
