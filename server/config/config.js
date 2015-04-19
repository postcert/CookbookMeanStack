var path = require('path');
var rootPath = path.normalize(__dirname +'/../../');

module.exports = {
    development: {
        db: 'mongodb://localhost/multivision',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        db: 'mongodb://postcert:justapass@ds061651.mongolab.com:61651/multivision',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    }
}