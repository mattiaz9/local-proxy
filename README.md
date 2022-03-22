# Setup

Setup a local proxy.

1 - Intall dependencies
`yarn`

2 - Install p2m
`npm i -g pm2`

3 - Run process
`pm2 start index.js --name localproxy`

Now you can navigate to `https://localhost:3333/http://yourcustomurl.com`