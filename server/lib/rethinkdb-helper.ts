// const r = require('rethinkdb');
import * as r from 'rethinkdb';
import { config } from '../config';

export const createConn = async () => {
    try {
        return await r.connect(config.rethinkdb);

    } catch (error) {
        throw Error('Couldn\'t connect to the DB');
    }
};

export const closeConn = (conn: r.Connection) => conn.close();

