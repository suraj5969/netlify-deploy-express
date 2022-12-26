const express = require("express");
const serverless = require("serverless-http");

const app = express();

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hii",
  });
});

router.get("/route", (req, res) => {
  try {
    res.json({ name: "First Route" });
  } catch (err) {
    console.log(err);
    res.send("got error in catch block for api-route");
  }
});

// to access below route go to localhost:9000/.netlify/functions/api/test-route
router.get("/test-route", async (req, res) => {
  // got to baseuel/api/test-route you will see the result
  try {
    res.json({ name: "Test Route" });
  } catch (err) {
    console.log(err);
    res.send("got error in catch block for test-route");
  }
});

app.use("/.netlify/functions/api", router); // here we are making /.netlify/functions/api as base bath  for all routes, because ntlify requires this

module.exports.handler = serverless(app); // strarts at 9000 port on local
