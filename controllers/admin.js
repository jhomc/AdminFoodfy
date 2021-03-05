const fs = require('fs')
const data = require("../data.json")



exports.index = function(req, res) {
    return res.render("admin/index", { items: data.recipes })
}
exports.details = function (req, res) {
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
        return res.render("admin/recipedetails", { item: foundRecipe, recipeIndex })
    }
}
exports.edit = function(req, res ) {
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
        return res.render('admin/edit', { recipe: foundRecipe })
    }
}