import express from "express";

import { summarise } from "../controllers/summarise.controller.js";


const router = express.Router();


router.post("/",summarise);



export default router;