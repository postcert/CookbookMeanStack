var mongoose = require('mongoose');

var maxHour = [24, 'The value of field `{PATH}` ({VALUE}) exceeds the limit ({MAX}).'];
var maxMinute = [60, 'The value of field `{PATH}` ({VALUE}) exceeds the limit ({MAX}).'];

var recipeSchema = mongoose.Schema({
    title: {type: String, required:'{PATH} is required'},
    creator: {type: String, required:'{PATH} is required'},
    featured: {type:Boolean, required:'{PATH} is required'},
    published: {type:Date, required:'{PATH} is required'},
    cookbook: {type: String, required:'{PATH} is required'},
    cooktimeHour: {type: Number, required:'{PATH} is required', max: maxHour},
    cooktimeMinute: {type: Number, require:'{PATH} is required', max: maxMinute},
    directions: [String],
    ingredients: [String]
});

var Recipe = mongoose.model('Recipe', recipeSchema);

function createDefaultRecipes() {
    Recipe.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
            Recipe.create({title: 'Chicken', creator: 'Daniel', featured: true, published: new Date('10/5/2013'), cookbook: 'Daniel', cooktimeHour: 1, cooktimeMinute: 0, directions:['Place Chicken on Flame', 'Eat the Chicken'], ingredients: ['Chicken', 'Fire']});
            Recipe.create({title: 'Beef', creator: 'Daniel', featured: true, published: new Date('10/5/2013'), cookbook: 'Daniel', cooktimeHour: 1, cooktimeMinute: 0, directions:['Place Chicken on Flame', 'Eat the Chicken'], ingredients: ['Chicken', 'Fire']});
        }
    })
}

exports.createDefaultRecipes = createDefaultRecipes;