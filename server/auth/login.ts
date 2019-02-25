import * as jwt from 'jsonwebtoken';
import { STATUS_CODES, getResponse } from '../lib/responses';
export const users: any = {
  pedro: {
    _id: 1,
    name: 'Pedro',
    lastname: 'Paramo',
    role: 'Admin',
    country: 'Mexico'
  },
  emmanuel: {
    _id: 2,
    name: 'Emmanuel',
    lastname: 'De Oca',
    role: 'User',
    country: 'Mexico',
  },
  juan: {
    _id: 3,
    name: 'Juan',
    lastname: 'De la Barrera',
    role: 'User',
    country: 'USA',
  }
};

export const handler = async (event: AWSLambda.APIGatewayEvent, context: AWSLambda.APIGatewayEventRequestContext) => {  
  const JWT_SECRET = process.env.JWT_SECRET;
  try {    
    if(!event.body) throw Error('Missing fields');
    const { username, password } = JSON.parse(event.body);
    if(!username || !password) throw Error('Missing fields');
      // Authenticate user
    const user = users[username.toLowerCase()];
    if(!user) throw Error('No user');
    
    // Issue JWT
    const token = jwt.sign({ user }, JWT_SECRET);

    return getResponse(STATUS_CODES.ok, {
      token
    });
  } catch (e) {
    return getResponse(STATUS_CODES.unauthorized, {
      error: e.message,
    });
  }
};
