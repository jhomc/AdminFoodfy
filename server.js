const express = require('express')
const nunjucks = require('nunjucks')


const server = express()
const receitas = require('./data')

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    return res.render("home")
})

server.get("/sobre", function(req, res) {
    return res.render("sobre")
})

server.get("/receitas", function(req, res) {
    return res.render("receitas", { items: receitas})
})

server.get("/inforeceita/:index", function (req, res) {
    const recipes = [...receitas];
    const recipeIndex = req.params.index;
    
    if(!recipes[recipeIndex]) {
        return res.status(404).render("pagina não encontrada")
    }
    else {
        return res.render("inforeceita", {item: recipes[recipeIndex]})
    }
})    

server.listen(5000, function () {
    console.log("server is running")
})