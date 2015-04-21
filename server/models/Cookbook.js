var mongoose = require('mongoose');

var minRating = [0, 'The value of field `{PATH}` ({VALUE}) lower than the limit ({MIN}).'];
var maxRating = [5, 'The value of field `{PATH}` ({VALUE}) exceeds the limit ({MAX}).'];

var cookbookSchema = mongoose.Schema({
    title: {type: String, required:'{PATH} is required', unique: true},
    creator: {type: String, required:'{PATH} is required'},
    featured: {type: Boolean, required:'{PATH} is required'},
    rating: {type: Number, required:'{PATH} is required', max:maxRating, min:minRating}
    published: {type: Date, required:'{PATH} is required'}
});

var Cookbook = mongoose.model('Cookbook', cookbookSchema);

function createDefaultCookbooks() {
    Cookbook.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
            Cookbook.create({title:'Favorite Recipes', creator:'dan', featured: true, published: new Date('4/21/2015')})
        }
    })
}

exports.createDefaultCookbooks = createDefaultCookbooks;