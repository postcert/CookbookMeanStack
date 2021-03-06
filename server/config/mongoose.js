var mongoose = require('mongoose'),
    userModel = require('../models/User'),
    recipeModel = require('../models/Recipe'),
    cookbookModel = require('../models/Cookbook');

module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error..'));
    db.once('open', function callback() {
        console.log('Connected to the database.');
    });

    userModel.createDefaultUsers();
    recipeModel.createDefaultRecipes();
    cookbookModel.createDefaultCookbooks();
};