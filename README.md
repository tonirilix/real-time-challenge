# real-time-challenge
GBM Back-End Challenge

Specific setup instructions can be found [here](https://github.com/tonirilix/node-great-again/wiki/Client-setup). The following are instructions for running the full project after everything is properly setup.

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

## Known issues

1. Login validates but it doesn't shows an error message
2. There are guards to validate session across urls but some unwanted behaviors could still happen.
3. Deepstream socket keeps opened after logout