import express from "express"
import { getData } from "../controllers/data.js"
// import { getData } from "../controllers/data.ts"

const router = express.Router()

router.get("/", getData)
// router.post("/", createData)
// router.put("/:id", updateData)
// router.get("/search/:key", searchData)
// router.post("/search", chartVisualizeData)

export default router