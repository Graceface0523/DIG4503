const Express = require("express");
const App = Express();
const port = 80;
const pokemon = require("json-pokemon");

App.get("/id/:id",function(req,res){
    pokemon.forEach((value)=> {
        if(value.id == req.params.id) {
            res.send(req.params);
        }       
});
    res.send("Invalid!");
});

App.get("/name/:name",function(req,res) {
   pokemon.forEach((value)=> {
        if(value.name == req.params.name) {
            res.send(req.params);
        }
    });
    res.send("Invalid!");
});

App.listen(port, () => {
    console.log("Server running!");
});
