const net = require("net");


const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.on("data", (data) => {
    console.log("you ded cuz you idled");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;
};

console.log("Connecting ...");
connect();

module.exports = connect;