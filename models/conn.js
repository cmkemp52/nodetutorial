const pgp = require('pg-promise')({
    query: function(e){
    }
});

const options = {
    host: "localhost",
    database: "music",
}

const db = pgp(options);
module.exports = db;