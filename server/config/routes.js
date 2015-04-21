var auth = require('./auth'),
    users = require('../controllers/users'),
    recipes = require('../controllers/recipes'),
    cookbooks = require('../controllers/cookbooks'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports = function(app) {

    app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
    app.post('/api/users', users.createUser);
    app.put('/api/users', users.updateUser);

    app.get('/api/recipes', recipes.getRecipes);
    app.post('/api/recipes', recipes.createRecipe);
    app.delete('/api/recipes/:id', recipes.removeRecipe);
    app.get('/api/recipes/:id', recipes.getRecipeById);
    app.get('/api/user/:user_id/recipes', recipes.getRecipesByUser);

    app.get('/api/cookbooks', cookbooks.getCookbooks);
    app.post('/api/cookbooks', cookbooks.createCookbook);
    app.delete('/api/cookbooks/:id', cookbooks.removeCookbook);
    app.get('/api/cookbooks/:id', cookbooks.getCookbookById);
    app.get('/api/user/:user_id/cookbooks', cookbooks.getCookbookByUser);

    app.get('/partials/*', function(req, res) {
        res.render('../../public/app/' + req.params[0]);
    });

    app.post('/login', auth.authenticate);

    app.post('/logout', function(req, res) {
        req.logout();
        res.end();
    });

    app.all('/api/*', function(req, res) {
        res.sendStatus(404);
    });

    app.get('*', function(req, res) {
        res.render('index', {
            bootstrappedUser: req.user
        })
    });
};