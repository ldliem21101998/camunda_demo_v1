import express from "express";
import {
  getData,
  getUnApproval,
  approveAbsenceRequest,
} from "../controllers/data.js";

const router = express.Router();

router.post("/", getData);
router.get("/unapproval", getUnApproval);
router.post("/approve", approveAbsenceRequest);
// router.post("/", createData)
// router.put("/:id", updateData)
// router.get("/search/:key", searchData)
// router.post("/search", chartVisualizeData)

export default router;
