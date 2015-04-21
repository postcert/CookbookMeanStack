var Recipe = require('mongoose').model('Recipe');

exports.getRecipes = function(req, res) {
    Recipe.find({}).exec(function (err, collection) {
        res.send(collection);
    });
};
exports.getRecipeById = function(req, res) {
    Recipe.findOne({_id:req.params.id}).exec(function(err, recipe) {
        res.send(recipe);
    })
};
exports.getRecipesByUser = function(req, res) {
    Recipe.find({creator:req.params.user_id}).exec(function(err, recipes) {
        res.send(recipes);
    });
};
exports.createRecipe = function(req, res) {
    var recipeData = req.body;

    Recipe.create(recipeData, function(err) {
        if(err) {
            if(err.toString().indexOf('E11000') > -1) {
                err = new Error('Duplicate Title');
            }
            res.status(400);
            return res.send({reason:err.toString()});
        }
    })
};
exports.removeRecipe = function(req, res) {
    Recipe.findOne({_id:req.params.id}).remove().exec(function(err, recipe) {
        res.send(recipe);
    })
};