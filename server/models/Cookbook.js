var mongoose = require('mongoose');

var minRating = [0, 'The value of field `{PATH}` ({VALUE}) lower than the limit ({MIN}).'];
var maxRating = [5, 'The value of field `{PATH}` ({VALUE}) exceeds the limit ({MAX}).'];

var cookbookSchema = mongoose.Schema({
    title: {type: String, required:'{PATH} is required', unique: true},
    creator: {type: String, required:'{PATH} is required'},
    featured: {type: Boolean, required:'{PATH} is required'},
    rating: {type: Number, required:'{PATH} is required', max:maxRating, min:minRating},
    published: {type: Date, required:'{PATH} is required'}
});

var Cookbook = mongoose.model('Cookbook', cookbookSchema);

function createDefaultCookbooks() {
    Cookbook.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
            Cookbook.create({title:'Favorites', creator:'dan', featured: true, rating: 4, published: new Date('4/21/2015')});
            Cookbook.create({title:'Tasty', creator:'dan', featured: false, rating: 5, published: new Date('1/1/2111')});
            Cookbook.create({title:'Yummy', creator:'john', featured: true, rating: 4, published: new Date('2/21/2065')});
            Cookbook.create({title:'Food', creator:'john', featured: false, rating: 1, published: new Date('1/1/2111')});
            Cookbook.create({title:'Best', creator:'john', featured: true, rating: 3, published: new Date('7/21/1915')});
            Cookbook.create({title:'Average', creator:'john', featured: false, rating: 2, published: new Date('4/1/1911')});
        }
    })
}

exports.createDefaultCookbooks = createDefaultCookbooks;