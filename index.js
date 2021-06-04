const fs = require('fs')
const path = require('path')
const corsServer = require('cors-anywhere')

require('dotenv').config()

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3333

corsServer.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: [],
  httpsOptions: {
    key: fs.readFileSync(path.resolve(__dirname, process.env.KEY_PATH)),
    cert: fs.readFileSync(path.resolve(__dirname, process.env.CERT_PATH))
  },
}).listen(port, host, function () {
  console.log('Running CORS Anywhere on https://' + host + ':' + port)
})