const express = require("express");
const app = express();

//handling static HTML and EJS templates
app.use(express.static("public"));

//using the ejs view engine, looks into the default view directory
app.set("view engine", "ejs");

//route for contacts, / is to represent the route of the website. request and response
//is a callback function which is called when we have an http get request to this endpoint
//when we get an http get request to the route of our website we respond by rendering
// contacts, this whole process is how you define a route. Define new routes by
//calling app.get. The res.render, renders a view and sents it back to the browser.
app.get("/contacts", (req, res) => {
  res.render("contacts");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/catalog", (req, res) => {
  res.render("catalog");
});

app.get("/clients", (req, res) => {
  res.render("clients");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/articles", (req, res) => {
  res.render("articles");
});

app.get("/", (req, res) => {
  res.render("index"); //no need for ejs extension
});

//pass requests to the router middleware
const router = require("./routes/apis");
app.use(router);

//make the app listen on port, storing the result in a constant called port
const port = process.argv[2] || process.env.PORT || 3000;
console.log(port);
const server = app.listen(port, () => {
  console.log(`Cart app listening at http://localhost:${port}`);
});
