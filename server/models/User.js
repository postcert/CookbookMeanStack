var mongoose = require('mongoose'),
    encryption = require('../utilities/encryption');

var userSchema = mongoose.Schema ({
    firstName: {type: String, required: '{PATH} is required'},
    lastName: {type: String, required: '{PATH} is required'},
    userName: {
        type: String,
        required: '{PATH} is required',
        unique: true
    },
    salt: {type: String, required: '{PATH} is required'},
    hashed_pwd: {type: String, required: '{PATH} is required'},
    cookbooks: [String],
    roles: [String]
});
userSchema.methods = {
    authenticate: function(passwordToMatch) {
        return encryption.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    },
    hasRole: function(role) {
        return this.roles.indexOf(role) > -1;
    }
};
var User = mongoose.model('User', userSchema);

exports.createDefaultUsers =  function() {
    User.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            var salt, hash;
            salt = encryption.createSalt();
            hash = encryption.hashPwd(salt, 'dan');
            User.create({
                firstName: 'Daniel',
                lastName: 'Young',
                userName: 'dan',
                salt: salt,
                hashed_pwd: hash,
                cookbooks: ['Daniel'],
                roles: ['admin']
            });
            salt = encryption.createSalt();
            hash = encryption.hashPwd(salt, 'john');
            User.create({
                firstName: 'John',
                lastName: 'Jovi',
                userName: 'john',
                salt: salt,
                hashed_pwd: hash,
                cookbooks: ['yummy'],
                roles: ['']
            });
            salt = encryption.createSalt();
            hash = encryption.hashPwd(salt, 'joe');
            User.create({firstName: 'Joe', lastName: 'Ames', userName: 'joe', salt: salt, hashed_pwd: hash, cookbooks: ['best'],});
        }
    })
};