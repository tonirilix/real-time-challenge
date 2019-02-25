# real-time-challenge
GBM Back-End Challenge

Documentation and specific setup instructions can be found [here](https://github.com/tonirilix/real-time-challenge/wiki). Those are very important to follow before trying to run the project.
The following are instructions for running the full project after everything is properly setup.

## Demo
![alt text](https://ucc3f1edf514b821895376dbf29a.previews.dropboxusercontent.com/p/orig/AAVrfXfOqlMKFskZk75AC-gGJ_0yh-TKlP-PuEi0x54cj0rq1RJaND7Z_bLOhHpNPm9Xk5a5iHRJxsonq8yjeplIshDHYNoyuxP-0TM3aQCLCMmTVsI9J9cHBMmZqvHcvNbZTlGlrbzTcZMd25PmZUlZkDDweeEfrMWvzyEH_lTNdT3-t4nqjad8yfyGdrtFmit2VsgD11s4ggXaFI1yyD82vJDHGx5PKpe9CXot0P0m-vSjLPKsST45MmbS9zVHXH7_kEyUmWLzYxY1xKqdHIoO6GHMUCDphqSuDR_v_hZwfepkG3-dguYgrPMUshYNHXc/p.gif?size_mode=5 "Demo")

## Global Dependencies
- Node 8.11.1 / Npm 5.6.0
- Serverless 1.37.1
- Angular CLI: 7.3.3 (optional if you don't need to create extra elements)

## Steps to run demo

1. Run ```rethinkdb``` to start RethinkDB server
2. Run ```deepstream start``` to start Deepstream server
3. Go to ```server```folder and do ```serverless offline start```
4. Go to ```client``` and do ```npm start```; Url ```localhost:4200``` will be created


## Steps to use the demo
1. For demo purposes open ```localhost:4200``` in 3 different windows with isolated Local Storages, e.g. 1 window in normal mode, 1 window in incognito mode, 1 window in a different browser
2. Log with user 1
3. Set users 2 and 3 on the other two windows without login
4. Click on each login button so you can see concurrent users

## Tests
Client: 
1. Go into client folder
2. run ```npm test```

Note: Specs were created by angular cli.

Server: 
1. Go into server folder
2. run ```npm test```

Note: Specs were created from scratch.

## Endpoints Info

### Postman collection
https://www.getpostman.com/collections/b699dfb15b23550b09fb

### Login

POST http://localhost:3000/login

BODY: ```{"username": "pedro","password": "paramo"}```

### Update user location
POST http://localhost:3000/geo/locations

BODY: ```{"latitude":42.356483,"longitude":-71.062016}```

HEADERS: 

Authorization: Bearer {token}

Content-Type: application/json

### Get location history
GET http://localhost:3000/users/{userId}/geo/locations

HEADERS: 

Authorization: Bearer {token}

Content-Type: application/json




Note: Specs were created from scratch.


## Known issues

1. Login validates but it doesn't shows an error message
2. There are guards to validate session across urls but some unwanted behaviors could still happen
3. Deepstream socket keeps opened after logout and
4. WS implementation still doesn't use jwt
