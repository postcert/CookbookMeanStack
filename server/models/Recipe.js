var mongoose = require('mongoose');

var recipeSchema = mongoose.Schema({
    title: {type: String, required:'{PATH} is required'},
    creator: {type: String, required:'{PATH} is required'},
    featured: {type:Boolean, required:'{PATH} is required'},
    published: {type:Date, required:'{PATH} is required'},
    cookbook: {type: String, required:'{PATH} is required'},
    ingredients: [String]
});

var Recipe = mongoose.model('Recipe', recipeSchema);

function createDefaultRecipes() {
    Recipe.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
            Recipe.create({title: 'Chicken', creator: 'Daniel', featured: true, published: new Date('10/5/2013'), cookbook: 'Daniel', ingredients: ['Chicken', 'Fire']});
            Recipe.create({title: 'Beef', creator: 'Daniel', featured: true, published: new Date('10/5/2013'), cookbook: 'Daniel', ingredients: ['Chicken', 'Fire']});
        }
    })
}

exports.createDefaultRecipes = createDefaultRecipes;