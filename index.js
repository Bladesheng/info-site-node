import express from "express";
import path from "path";

const app = express();

app.use(express.static("public"));

// 404 handler
app.use(async (req, res) => {
  res.status(404);
  res.sendFile(path.resolve("public/404.html"));
});

const hostName = "localhost";
const port = 8080;

app.listen(port, () => {
  console.log(`Server running at http://${hostName}:${port}/`);
});
