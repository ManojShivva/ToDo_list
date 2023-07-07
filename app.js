const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js")

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const items = ["cleaning", "washing", "eating"];
const work_items = ["complete web", "reading", "writing"];
let itemToAdd = "";

app.set("view engine", "ejs"); //which is generated using Express to use EJS as view engine

app.get("/", function(req, res) {
let day = date.getDay();
res.render("list", {newListItems: items, listTitle: day});
});

app.post("/",function(req,res){
  if(req.body.list == "work"){
    work_items.push(req.body.newItem);
    res.redirect("/work");
  }
  else{
    items.push(req.body.newItem);
    res.redirect("/");
  }
});

app.get("/work",function(req,res){
res.render("list", {newListItems: work_items, listTitle: "work list"});
});


app.listen(3000, function(req, res) {
  console.log("port 3000 is listening to the requests");
});
