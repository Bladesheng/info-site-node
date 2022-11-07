import express from "express";
import path from "path";

const app = express();

app.use((req, res, next) => {
  console.log("Request Date: " + new Date());
  console.log("Request IP: " + req.ip);
  console.log("Request Method: " + req.method);
  console.log("Request Path: " + req.path);
  console.log("Request Protocol: " + req.protocol);
  console.log();

  next();
});

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
