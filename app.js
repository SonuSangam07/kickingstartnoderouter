//const { fstat } = require('fs');
const http=require('http');
const routes=require('./routes');
const server=http.createServer(routes);
server.listen(501);