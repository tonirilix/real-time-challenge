export const STATUS_CODES = {
  ok: 200,
  created: 201,
  bad_request: 400,
  unauthorized: 401,
  forbidden: 403,
  not_found: 404
};

export const getResponse = (errorCode:number, body: any) => {
  return { // Success response
    statusCode: errorCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(body),
  }
};