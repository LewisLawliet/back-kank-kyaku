import express  from "express";
const router = express.Router();
import { createGrade, findAllGrades } from "../controllers/grade.js";

export default router.post("/grade", createGrade );
 router.get("/grade", findAllGrades);