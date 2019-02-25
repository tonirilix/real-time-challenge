const r = require('rethinkdb');  
const config = require('./config.js').config.rethinkdb;  
let conn;

r.connect(config.rethinkdb)  
    .then(connection => {
        console.log('Connecting RethinkDB...');
        conn = connection;
        return r.dbCreate(config.db).run(conn);
    })
    .then(() => {
        console.log(`Database "${config.db}" created!`);
        return r.db(config.db).tableCreate(config.table).run(conn);
    })
    .then(() => console.log(`Table "${config.table}" created!`))
    .error(err => console.log(err))
    .finally(() => process.exit(0));
