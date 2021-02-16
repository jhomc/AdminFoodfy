const express = require('express')
const routes = express.Router()
const receitas = require('./data')
const admin = require('./controllers/admin')
const users = require('./controllers/users')




routes.get("/", function(req, res) {
    return res.redirect("users")
})

routes.get("/users", users.index)

routes.get("/users/sobre", function(req, res) {
    return res.render("users/sobre")
})

routes.get("/users/receitas", function(req, res) {
    return res.render("users/receitas", { items: receitas})
})

routes.get("/inforeceita/:index", function (req, res) {
    const recipes = [...receitas];
    const recipeIndex = req.params.index;
    
    if(!recipes[recipeIndex]) {
        return res.status(404).send("pagina não encontrada")
    }
    else {
        return res.render("users/inforeceita", {item: recipes[recipeIndex]})
    }
})  

routes.get("/admin", admin.index )

module.exports = routes