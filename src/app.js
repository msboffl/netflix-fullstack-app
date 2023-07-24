import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Netflix");
});

// Named Export
export { app };
