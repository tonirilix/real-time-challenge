import * as r from 'rethinkdb';

import { config } from '../config';
import { STATUS_CODES, getResponse } from '../lib/responses';
import * as rethinkdb from '../lib/rethinkdb-helper';
import * as deepstream from '../lib/deepstream-helper';

export const setLocation = async (event: AWSLambda.APIGatewayEvent, context: AWSLambda.APIGatewayEventRequestContext) => {
  try {
    if(!event.body) throw Error('Missing data');    
    const ds = deepstream.login();    
    const conn = await rethinkdb.createConn();
    const { latitude, longitude } = JSON.parse(event.body);
    const user = JSON.parse(event.requestContext.authorizer.user)

    const geoData = {
      user: user._id,
      location: r.point(latitude,longitude),
      last_update: new Date()
    };

    const result = await r.table(config.rethinkdb.table).insert(geoData).run(conn);
    
    if (result.inserted !== 1) {
      throw Error("Document was not inserted.");
    }
    const _id = result.generated_keys[0];
    const data = {
      ...geoData,
      _id,
      name: user.name,
      country: user.country,
      coordinates: {
        latitude, longitude
      }
    }
    deepstream.emit(ds, 'test-event', data);
    
    
    rethinkdb.closeConn(conn);
    deepstream.logout(ds);

    return getResponse(STATUS_CODES.created, {data});

  } catch (e) {
    return getResponse(STATUS_CODES.bad_request, {
      error: e.message
    })
  }
};



export const getUserLocations = async (event: AWSLambda.APIGatewayEvent, context: AWSLambda.APIGatewayEventRequestContext) => {
  try {
    const conn = await rethinkdb.createConn();
    const user = JSON.parse(event.requestContext.authorizer.user)
    const userId = parseInt(event.pathParameters.id);
    const limit = 10;

    const result = await r.table(config.rethinkdb.table)
      .filter({user:userId})
      .orderBy(r.desc('last_update'))
      .limit(limit)
      .run(conn);
    const data = await result.toArray();
    
    rethinkdb.closeConn(conn);
    return getResponse(STATUS_CODES.ok, {data});

  } catch (e) {
    return getResponse(STATUS_CODES.bad_request, {
      error: e.message
    })
  }
};
