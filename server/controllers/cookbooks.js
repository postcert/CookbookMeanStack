var Cookbook = require('mongoose').model('Cookbook');

exports.getCookbooks = function(req, res) {
    Cookbook.find({}).exec(function (err, collection) {
        res.send(collection);
    });
};
exports.getCookbookById = function(req, res) {
    Cookbook.findOne({_id:req.params.id}).exec(function(err, course) {
        res.send(course);
    })
};
exports.getCookbookByUser = function(req, res) {
    Cookbook.find({creator:req.params.user_id}).exec(function(err, cookbooks) {
        res.send(cookbooks);
    });
};