const express = require('express')
const routes = express.Router()
const data = require('./data.json')
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
    
    return res.render("users/receitas", { items: data.recipes })
})

routes.get("/inforeceita/:index", function (req, res) {
    const recipeIndex = req.params.index;
    
    
    const foundRecipe = data.recipes.find(function(recipe, index) {

        if (recipeIndex == index) {
            return recipe
        }
    })

    if(!foundRecipe) {
        return res.status(404).send("pagina não encontrada")
    }
    else {
        return res.render("users/inforeceita", { item: foundRecipe })
    }

})  



routes.get("/admin", admin.index )
routes.get("/admin/recipedetails/:index", admin.details)
routes.get("/admin/edit/:index", admin.edit)

module.exports = routes