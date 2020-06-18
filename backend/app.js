
const express = require("express");
const bodyParser = require("body-parser");
const data = require('./data').userList;
const JsSearch = require('js-search');

const app = express();

var search = new JsSearch.Search('id');
search.addIndex('userId');
search.addIndex(['title']);
search.addIndex('body')

search.addDocuments(data);



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});



app.get("/posts", (req, res)=>{
  console.log(req.query.userId);
  res.send(search.search(req.query.userId));
})

module.exports = app;
