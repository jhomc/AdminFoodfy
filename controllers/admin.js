const fs = require('fs')
const recipes = require("../data.js")



exports.index = function(req, res) {
    return res.render("admin/index", { items: recipes })
}
exports.details = function (req, res) {
    const recipe = [...recipes];
    const recipeIndex = req.params.index;
    
    if(!recipe[recipeIndex]) {
        return res.status(404).send("pagina não encontrada")
    }
    else {
        return res.render("admin/recipedetails", {item: recipe[recipeIndex]})
    }
}