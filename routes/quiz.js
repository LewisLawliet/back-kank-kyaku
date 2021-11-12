import express  from "express";
const router = express.Router();
import { createQuiz, findAllQuiz } from "../controllers/quiz.js";

export default router.post("/quiz", createQuiz );
 router.get("/quiz", findAllQuiz);