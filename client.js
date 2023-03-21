const net = require("net");


const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.on("data", (data) => {
    console.log("you ded cuz you idled");
  });

  conn.on("connect", (connect) => {
    console.log("Successfully connected to game server");
    conn.write("Name: MVH")
  });

  // setTimeout((connect) => {
  //   console.log("Delayed for 5 second.");
  //   conn.write("Move: up")
  // }, "5000");

  // setInterval((connect) => {
  //   console.log("Delayed for 5 second.");
  //   conn.write("Move: up")
  // }, "5000");
 

  // interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;
};

console.log("Connecting ...");
connect();


module.exports = connect;