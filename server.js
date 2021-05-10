var net = require("net");

// Configuration parameters
var HOST = "localhost";
var PORTA = 50001;

// Create Server instance
var server = net.createServer(onClientConnected);

server.listen(PORTA, HOST, function () {
  console.log("server listening on %j", server.address());
});

function onClientConnected(sock) {
  var remoteAddress = sock.remoteAddress + ":" + sock.remotePort;
  //   console.log("new client connected: %s", remoteAddress);

  sock.on("data", function (data) {
    console.log(data.toString());
    // sock.write(data);
    // sock.write(" exit");
  });
  sock.on("close", function () {
    // console.log("connection from %s closed", remoteAddress);
  });
  sock.on("error", function (err) {
    console.log("Connection %s error: %s", remoteAddress, err.message);
  });
}
