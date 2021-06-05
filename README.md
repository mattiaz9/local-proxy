# Setup

1 - Install p2m
`npm i -g pm2`

and after:
`pm2 startup`

2 - Intall dependencies
`yarn`

3 - Start deamon
`yarn start`

4 - Setup startup script
`pm2 startup`

then:
`sudo env PATH=$PATH:/usr/local/bin /usr/local/lib/node_modules/pm2/bin/pm2 startup launchd -u yourusername --hp /Users/yourusername`