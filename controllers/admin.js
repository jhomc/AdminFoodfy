const fs = require('fs')
const data = require("../data.js")



exports.index = function(req, res) {
    return res.render("admin/index", { items: data })
}