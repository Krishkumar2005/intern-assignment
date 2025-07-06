import express from "express"
import { getBusinessData } from "../controllers/business-data.js"
import { getdifferentHeadline } from "../controllers/regenerate-headline.js"

const router = express.Router()


router.route("/business-data").post(getBusinessData)
router.route("/regenerate-headline").get(getdifferentHeadline)

export default router