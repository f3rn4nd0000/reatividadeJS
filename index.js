var restify = require('restify');

function respond(req, res) {
  res.send('hello world');
}

var server = restify.createServer();
server.get('/', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});