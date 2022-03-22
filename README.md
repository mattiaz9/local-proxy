# localproxy

Run a local proxy to avoid insecure requests and cors errors.

## Setup

### 1 - Install dependencies

`yarn`

### 2 - Install SSL certificate

`mkcert -key-file ssl/key.pem -cert-file ssl/cert.pem localhost`

### 3 - Copy and rename `.env.example` in `.env`

### 4 - Install p2m

`npm i -g pm2`

### 5 - Run process

`pm2 start index.js --name localproxy`


## How to use

You can navigate to `https://localhost:3333/http://yourcustomurl.com`