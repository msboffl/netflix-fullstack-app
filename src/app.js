import http from "http";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "views/index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "views/login.html"));
});

app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "views/signup.html"));
});


// Export server
export { server };
