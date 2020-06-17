
const express = require("express");
const bodyParser = require("body-parser");
const data = require('./data').userList;

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/posts", (req, res)=>{
  console.log(req.query);
  res.send(data);
})

module.exports = app;
