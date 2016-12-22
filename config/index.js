'use strict';

if (process.env.NODE_ENV === 'production'){
    //Offer production environment
    module.exports = {
        host: process.env.host || "",
        dbURI: process.env.dbURI
    }
}
else {
    //Offer development environment
    module.exports = require('./development.json');
}