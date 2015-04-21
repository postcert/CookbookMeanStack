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
exports.createCookbook = function(req, res) {
    var cookbookData = req.body;

    Cookbook.create(cookbookData, function(err) {
        if(err) {
            if(err.toString().indexOf('E11000') > -1) {
                err = new Error('Duplicate Title');
            }
            res.status(400);
            return res.send({reason:err.toString()});
        }
    })
};
exports.removeCookbook = function(req, res) {
    Cookbook.findOne({_id:req.params.id}).remove().exec(function(err, cookbook) {
        res.send(cookbook);
    })
};