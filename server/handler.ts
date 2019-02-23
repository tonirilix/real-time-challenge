import { STATUS_CODES, getResponse } from './lib/responses';

export const hello = async () => {
  return getResponse(STATUS_CODES.ok, {
    gbm: 'Go Serverless v1.0!'
  });
};
