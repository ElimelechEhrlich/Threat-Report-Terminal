import express from "express"
import { addReport, confirmReport, deleteReportById, getReports, getReportsWithHighThreatLevel } from "../controllers/reportsC.js"

const router = express.Router()

router.post("/", addReport)
router.get("/", getReports)
router.get("/high", getReportsWithHighThreatLevel)
router.put("/:id/confirm", confirmReport)
router.delete("/:id", deleteReportById)

export default router