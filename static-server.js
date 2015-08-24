var connect = require('connect');
var serveStatic = require('serve-static');

var port = 3250;

connect().use(serveStatic('.')).listen(port);
console.log('Server start at: '+ port);