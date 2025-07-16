import 'dotenv/config';
import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import path from "path";
import cors from 'cors'
import fs from 'fs';


import summarise from "./routes/summarise.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(cors());
app.use(express.json());

// API
app.use("/api/summarise", summarise);

// === Production Frontend Serving ===
if (process.env.NODE_ENV === "production") {
  const distPath = path.join(__dirname, "frontend", "dist");

  // Log for verification
  console.log("Serving from:", distPath);

  // Serve static files
  app.use(express.static(distPath));

  // Fallback route for SPA (React Router)
  app.get("*", (req, res) => {
    const indexPath = path.join(distPath, "index.html");
    console.log("Wildcard route hit:", req.url);
    res.sendFile(indexPath);
  });
}

// Start Server
app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});
