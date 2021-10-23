import express  from "express";
const router = express.Router();
import { createArticle, findAllArticles } from "../controllers/article.js";

export default router.post("/article", createArticle );
 router.get("/article", findAllArticles);