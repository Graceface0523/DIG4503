const Express = require("express");
const App = Express();
const port = 8080;

App.use(Express.static("public"));

App.use("/Lab3", Express.static("anotherFolder"));

App.get("/public", function(req,res) {
    res.send("Hello,World!");
});

App.listen(port, function() {
    console.log("Server running!");
});