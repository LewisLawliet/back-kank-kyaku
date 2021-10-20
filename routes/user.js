import express  from "express";
const router = express.Router();
import { createUser, log } from "../controllers/user.js";

export default router.post("/signup", createUser );
 router.post("/login", log);


//module.exports = router;
 