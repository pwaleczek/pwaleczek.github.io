var static = require('node-static')
  , fileServer = new static.Server('.')
  , port = 8080

require('http').createServer(function (req, res) {
  req.addListener('end', function () {
    fileServer.serve(req, res, function (err, result) {
      if (err && err.status === 404) {
        res.statusCode = err.status
        res.writeHead(err.status, err.headers)
        res.write('404 - Not Found.')
        res.end()
      }

      console.log(req.method, req.url, res.statusCode)
    })
  }).resume()
}).listen(port)
console.log('Listenning on port %s', port)
