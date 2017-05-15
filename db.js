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
/*
    const configHost = {
        user: 'frkbsxnaqqjccv', //env var: PGUSER
        database: 'd5h5cfksnfmjad', //env var: PGDATABASE
        password: 'abb355a7e43f2e9101dc2a0ae3df6f011c3d37c994496d97c16b8eee0ccc5a28', //env var: PGPASSWORD
        host: 'ec2-54-75-248-193.eu-west-1.compute.amazonaws.com', // Server hosting the postgres database
        port: 5432, //env var: PGPORT
        ssl: 'on'
    };

*/
    pg.connect(config, (err, client)=>{
        if (err) {
            return done(err);
        }
        state.db = client;
        done();
    })

};
exports.get = () => state.db;

