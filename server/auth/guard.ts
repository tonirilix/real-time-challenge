import * as jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET;

const buildIAMPolicy = (userId: any, effect: string, resource: string, context: any) => {
  const policy = {
    principalId: userId,
    policyDocument: {
      Version: '2012-10-17',
      Statement: [
        {
          Action: 'execute-api:Invoke',
          Effect: effect,
          Resource: resource,
        },
      ],
    },
    context,
  };

  return policy;
};



export const handler = async (event: AWSLambda.CustomAuthorizerEvent, context: AWSLambda.APIGatewayEventRequestContext) => {
    const token: string = event.authorizationToken || '';  
  
    try {
      const [tokenPrefix, tokenValue ] = token.split(' ');
      // Verify JWT
      const decoded: any = jwt.verify(tokenValue, JWT_SECRET);
  
      // Checks if the user's scopes allow her to call the current endpoint ARN
      const user = decoded.user;
      const isAllowed = true;
  
      // Return an IAM policy document for the current endpoint
      const effect = isAllowed ? 'Allow' : 'Deny';
      const userId = user.name;
      const authorizerContext = { user: JSON.stringify(user) };
      const policyDocument = buildIAMPolicy(userId, effect, event.methodArn, authorizerContext);
  
      console.log('Returning IAM policy document');
      return policyDocument;
    } catch (e) {
      console.log(e.message);
      throw Error('Unauthorized');
    }
  };
  