//Install express server




var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

var app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
var distDir = __dirname + "/dist/";
 app.use(express.static(distDir));

var port = process.env.PORT || 8000
app.listen(port);
console.log('server started ' + port);