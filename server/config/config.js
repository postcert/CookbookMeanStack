var path = require('path');
var rootPath = path.normalize(__dirname +'/../../');

module.exports = {
    development: {
        db: 'mongodb://localhost/cookbook',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        db: 'mongodb://postcert:justapass@ds041821.mongolab.com:41821/cookbook',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    }
}