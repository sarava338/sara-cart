import express from "express";
import {
  blockUser,
  getAllUsers,
  getUser,
  unBlockUser,
} from "../../contrllers/admin.controller.js";
import { mongoDbIdValidator } from "../../middleware/mongoose.middleware.js";

const router = express.Router();

router.get("/user/all", getAllUsers);

router.get("/user/:id", mongoDbIdValidator, getUser);

router.put("/user/block/:id/", mongoDbIdValidator, blockUser);

router.put("/user/unblock/:id", mongoDbIdValidator, unBlockUser);

export default router;
