const net = require("net");
const { IP, PORT } = require("./constants");


const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on("data", () => {
    //appears when idling too long
    console.log("you ded cuz you idled");
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: MVH");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;
};


module.exports = { connect };