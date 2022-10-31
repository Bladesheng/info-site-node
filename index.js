import * as http from "http";
import * as url from "url";
import * as fs from "fs/promises";

const server = http.createServer(async (req, res) => {
  const query = url.parse(req.url, true);

  let fileName = `.${query.pathname}.html`;

  if (fileName === "./.html") {
    fileName = "./index.html";
  }

  try {
    const data = await fs.readFile(fileName, "utf-8");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
  } catch (error) {
    res.writeHead(404, { "Content-Type": "text/html" });
    const data404 = await fs.readFile("./404.html", "utf-8");
    res.write(data404);
  }

  res.end();
});

const hostName = "localhost";
const port = 8080;

server.listen(port, () => {
  console.log(`Server running at http://${hostName}:${port}/`);
});
