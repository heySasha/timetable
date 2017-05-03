const pg = require('pg');

const state = {
    db: null
};

exports.connect = (done) => {
    if (state.db) {
        return done();
    }

    const config = {
        user: 'postgres', //env var: PGUSER
        database: 'test', //env var: PGDATABASE
        password: '8888', //env var: PGPASSWORD
        host: '127.0.0.1', // Server hosting the postgres database
        port: 5432, //env var: PGPORT
    };

    pg.connect(config, (err, client)=>{
        if (err) {
            return done(err);
        }
        state.db = client;
        done();
    })

};

exports.get = () => state.db;

