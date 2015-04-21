var mongoose = require('mongoose');

var maxHour = [24, 'The value of field `{PATH}` ({VALUE}) exceeds the limit ({MAX}).'];
var maxMinute = [60, 'The value of field `{PATH}` ({VALUE}) exceeds the limit ({MAX}).'];
var maxDifficulty = [5, 'The value of field `{PATH}` ({VALUE}) exceeds the limit ({MAX}).'];
var minHour = [0, 'The value of field `{PATH}` ({VALUE}) lower than the limit ({MIN}).'];
var minMinute = [0, 'The value of field `{PATH}` ({VALUE}) lower than the limit ({MIN}).'];
var minDifficulty = [0, 'The value of field `{PATH}` ({VALUE}) lower than the limit ({MIN}).'];
var recipeSchema = mongoose.Schema({
    title: {type: String, required:'{PATH} is required', unique: true},
    creator: {type: String, required:'{PATH} is required'},
    featured: {type:Boolean, required:'{PATH} is required'},
    published: {type:Date, required:'{PATH} is required'},
    cookbook: {type: String, required:'{PATH} is required'},
    cooktimeHour: {type: Number, required:'{PATH} is required', min: minHour, max: maxHour},
    cooktimeMinute: {type: Number, require:'{PATH} is required', min: minMinute, max: maxMinute},
    difficulty: {type: Number, require:'{PATH} is required', min: minDifficulty, max:maxDifficulty},
    directions: [String],
    ingredients: [String]
});

var Recipe = mongoose.model('Recipe', recipeSchema);

function createDefaultRecipes() {
    Recipe.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
            Recipe.create({title: 'Special Chicken', creator: 'dan', featured: true, published: new Date('10/5/2013'), cookbook: 'Favorites', cooktimeHour: 4, cooktimeMinute: 23, difficulty: 4, directions:['Place Chicken on Flame', 'Eat the Chicken'], ingredients: ['Chicken', 'Fire']});
            Recipe.create({title: 'Special Beef', creator: 'dan', featured: true, published: new Date('10/3/2013'), cookbook: 'Tasty', cooktimeHour: 2, cooktimeMinute: 43, difficulty: 3, directions:['Place Chicken on Flame', 'Eat the Chicken'], ingredients: ['Chicken', 'Fire']});
            Recipe.create({title: 'Seared Chicken', creator: 'dan', featured: true, published: new Date('10/5/2013'), cookbook: 'Favorites', cooktimeHour: 5, cooktimeMinute: 3, difficulty: 1, directions:['Place Chicken on Flame', 'Eat the Chicken'], ingredients: ['Chicken', 'Fire']});
            Recipe.create({title: 'Seared Beef', creator: 'dan', featured: true, published: new Date('10/6/2013'), cookbook: 'Tasty', cooktimeHour: 20, cooktimeMinute: 76, difficulty: 2, directions:['Place Chicken on Flame', 'Eat the Chicken'], ingredients: ['Chicken', 'Fire']});
            Recipe.create({title: 'Chicken', creator: 'dan', featured: true, published: new Date('10/5/2813'), cookbook: 'Favorites', cooktimeHour: 0, cooktimeMinute: 45, difficulty: 5, directions:['Place Chicken on Flame', 'Eat the Chicken'], ingredients: ['Chicken', 'Fire']});
            Recipe.create({title: 'Beef', creator: 'dan', featured: true, published: new Date('6/5/2013'), cookbook: 'Tasty', cooktimeHour: 15, cooktimeMinute: 9, difficulty: 2, directions:['Place Chicken on Flame', 'Eat the Chicken'], ingredients: ['Chicken', 'Fire']});
            Recipe.create({title: 'Tomato Chicken', creator: 'joe', featured: true, published: new Date('10/5/4813'), cookbook: 'Best', cooktimeHour: 0, cooktimeMinute: 45, difficulty: 5, directions:['Place Chicken on Flame', 'Eat the Chicken'], ingredients: ['Chicken', 'Fire']});
            Recipe.create({title: 'Tomato Beef', creator: 'joe', featured: true, published: new Date('11/5/2023'), cookbook: 'Average', cooktimeHour: 15, cooktimeMinute: 9, difficulty: 2, directions:['Place Chicken on Flame', 'Eat the Chicken'], ingredients: ['Chicken', 'Fire']});
            Recipe.create({title: 'Jalapeno Chicken', creator: 'joe', featured: true, published: new Date('10/5/2813'), cookbook: 'Best', cooktimeHour: 0, cooktimeMinute: 45, difficulty: 5, directions:['Place Chicken on Flame', 'Eat the Chicken'], ingredients: ['Chicken', 'Fire']});
            Recipe.create({title: 'Jalapeno Beef', creator: 'joe', featured: true, published: new Date('5/5/213'), cookbook: 'Average', cooktimeHour: 15, cooktimeMinute: 9, difficulty: 2, directions:['Place Chicken on Flame', 'Eat the Chicken'], ingredients: ['Chicken', 'Fire']});
            Recipe.create({title: 'Fire Chicken', creator: 'joe', featured: true, published: new Date('10/5/2813'), cookbook: 'Average', cooktimeHour: 0, cooktimeMinute: 45, difficulty: 5, directions:['Place Chicken on Flame', 'Eat the Chicken'], ingredients: ['Chicken', 'Fire']});
            Recipe.create({title: 'Fire Beef', creator: 'joe', featured: true, published: new Date('11/5/2013'), cookbook: 'Best', cooktimeHour: 15, cooktimeMinute: 9, difficulty: 2, directions:['Place Chicken on Flame', 'Eat the Chicken'], ingredients: ['Chicken', 'Fire']});
            Recipe.create({title: 'Apple Chicken', creator: 'john', featured: true, published: new Date('10/5/2813'), cookbook: 'Food', cooktimeHour: 0, cooktimeMinute: 45, difficulty: 5, directions:['Place Chicken on Flame', 'Eat the Chicken'], ingredients: ['Chicken', 'Fire']});
            Recipe.create({title: 'Apple Beef', creator: 'john', featured: true, published: new Date('1/5/2013'), cookbook: 'Yummy', cooktimeHour: 15, cooktimeMinute: 9, difficulty: 2, directions:['Place Chicken on Flame', 'Eat the Chicken'], ingredients: ['Chicken', 'Fire']});
            Recipe.create({title: 'Orange Chicken', creator: 'john', featured: true, published: new Date('4/5/2813'), cookbook: 'Food', cooktimeHour: 0, cooktimeMinute: 45, difficulty: 5, directions:['Place Chicken on Flame', 'Eat the Chicken'], ingredients: ['Chicken', 'Fire']});
            Recipe.create({title: 'Orange Beef', creator: 'john', featured: true, published: new Date('2/5/2013'), cookbook: 'Yummy', cooktimeHour: 15, cooktimeMinute: 9, difficulty: 2, directions:['Place Chicken on Flame', 'Eat the Chicken'], ingredients: ['Chicken', 'Fire']});
            Recipe.create({title: 'Roasted Chicken', creator: 'john', featured: true, published: new Date('7/5/2813'), cookbook: 'Yummy', cooktimeHour: 0, cooktimeMinute: 45, difficulty: 5, directions:['Place Chicken on Flame', 'Eat the Chicken'], ingredients: ['Chicken', 'Fire']});
            Recipe.create({title: 'Roasted Beef', creator: 'john', featured: true, published: new Date('4/5/2013'), cookbook: 'Food', cooktimeHour: 15, cooktimeMinute: 9, difficulty: 2, directions:['Place Chicken on Flame', 'Eat the Chicken'], ingredients: ['Chicken', 'Fire']});

        }
    })
}

exports.createDefaultRecipes = createDefaultRecipes;