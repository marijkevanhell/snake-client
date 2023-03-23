const {moveUp, moveLeft, moveRight, moveDown} = require("./constants.js");

// Stores the active TCP connection object.
let connection;
//accepts object to interact with server
const setupInput = (conn) => {
  //accepts object to interact with server
  connection = conn;
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === "w") {
    connection.write(moveUp);
  } if (key === "a") {
    connection.write(moveLeft);
  } if (key === "s") {
    connection.write(moveDown);
  } if (key === "d") {
    connection.write(moveRight);
  }
  if (key === "t") {
    connection.write("Say: Hi friend");
  }
  if (key === "l") {
    connection.write("Say: Can't catch me!");
  }
};

module.exports = { setupInput };

